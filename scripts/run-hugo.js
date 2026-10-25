#!/usr/bin/env node

const { spawn } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const binDir = path.join(repoRoot, 'node_modules', '.bin')
const vendorHugo = path.join(repoRoot, 'node_modules', 'hugo-bin', 'vendor', 'hugo')

function cleanPath () {
  const parts = (process.env.PATH || '').split(path.delimiter).filter(Boolean)
  return parts.filter(part => path.resolve(part) !== binDir).join(path.delimiter)
}

function findSystemHugo () {
  for (const dir of (process.env.PATH || '').split(path.delimiter).filter(Boolean)) {
    const resolvedDir = path.resolve(dir)
    if (resolvedDir === binDir) continue

    const candidate = path.join(dir, 'hugo')
    try {
      fs.accessSync(candidate, fs.constants.X_OK)
      return candidate
    } catch {}
  }
  return null
}

function run () {
  const env = { ...process.env, PATH: cleanPath() }

  const systemHugo = findSystemHugo()
  if (systemHugo) {
    spawnHugo(systemHugo, env)
    return
  }

  tryVendor(env)
}

function tryVendor (env) {
  if (fs.existsSync(vendorHugo)) {
    spawnHugo(vendorHugo, env)
    return
  }

  process.stderr.write('Error: could not find a usable Hugo binary. Reinstall dependencies or install a compatible Hugo binary.\n')
  process.exit(1)
}

function spawnHugo (executable, env) {
  let child
  try {
    child = spawn(executable, process.argv.slice(2), { stdio: 'inherit', env })
  } catch (err) {
    reportSpawnError(executable, err)
    return
  }

  child.on('error', err => reportSpawnError(executable, err))
  child.on('exit', code => process.exit(code ?? 1))
}

function reportSpawnError (executable, err) {
  process.stderr.write(`Error: could not run Hugo at ${executable}: ${err.message}. Reinstall dependencies or install a compatible Hugo binary.\n`)
  process.exit(1)
}

run()
