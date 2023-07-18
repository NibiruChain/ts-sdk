const re = /^(.*\/node_modules)(.*)$/

module.exports = (path, options) => {
  let opts = options
  if (path === "bech32") {
    opts = {
      ...options,
      basedir: options.basedir.replace(re, "$1"),
    }
  }
  return opts.defaultResolver(path, opts)
}
