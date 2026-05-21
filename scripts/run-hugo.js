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
    const child = spawn(systemHugo, process.argv.slice(2), { stdio: 'inherit', env })
    child.on('error', err => {
      process.stderr.write(err.message + '\n')
      process.exit(1)
    })
    child.on('exit', code => process.exit(code ?? 1))
    return
  }

  tryVendor(env)
}

function tryVendor (env) {
  if (fs.existsSync(vendorHugo)) {
    const child = spawn(vendorHugo, process.argv.slice(2), { stdio: 'inherit', env })
    child.on('exit', code => process.exit(code ?? 1))
    child.on('error', err => {
      process.stderr.write(err.message + '\n')
      process.exit(1)
    })
    return
  }

  process.stderr.write('Error: could not find a usable Hugo binary. Install Hugo or restore node_modules/hugo-bin/vendor/hugo.\n')
  process.exit(1)
}

run()
