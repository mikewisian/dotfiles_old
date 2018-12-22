module.exports = {
  brew: [
    // http://conqueringthecommandline.com/book/ack_ag
    'ack',
    'ag',
    // Install GNU core utilities (those that come with macOS are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'dos2unix',
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'findutils',
    'fortune',
    'readline', // ensure gawk gets good readline
    'gawk',
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    'gifsicle',
    'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnu-sed --with-default-names',
    // better, more recent grep
    'homebrew/dupes/grep',
    // https://github.com/jkbrzt/httpie
    'httpie',
    // jq is a sort of JSON grep
    'jq',
    // Mac App Store CLI: https://github.com/mas-cli/mas
    'mas',
    // Install some other useful utilities like `sponge`
    'moreutils',
    'nmap',
    'openconnect',
    'reattach-to-user-namespace',
    // better/more recent version of screen
    'homebrew/dupes/screen',
    'tmux',
    'tree',
    'ttyrec',
    // better, more recent vim
    'vim --with-override-system-vi',
    'watch',
    // Install wget with IRI support
    'wget --enable-iri',
    'chromedriver',
    'htop',
    'speedtest_cli',
    'ssh-copy-id'
  ],
  cask: [
    '1password',
    //'adium',
    'alfred',
    //'amazon-cloud-drive',
    'atext',
    //'atom',
    //'box-sync',
    'cleanmymac',
    //'comicbooklover',
    //'diffmerge',
    'docker',
    'dropbox',
    //'evernote',
    'fake',
    'firefox',
    'google-chrome',
    'gpgtools',
    'handbrake',
    //'ireadfast',
    'iterm2',
    'libreoffice',
    'little-snitch',
    'micro-snitch',
    //'macvim',
    'navicat-for-mysql',
    'nordvpn',
    'opera',
    'parallels-desktop',
    'sizeup',
    //'sketchup',
    'slack',
    'sourcetree',
    'sublime-text',
    'the-unarchiver',
    //'torbrowser',
    //'transmission',
    'visual-studio-code',
    'vlc',
    'xquartz'
  ],
  gem: [
    'wbench'
  ],
  npm: [
    'antic',
    'buzzphrase',
    'eslint',
    'instant-markdown-d',
    // 'generator-dockerize',
    'gulp',
    'npm-check',
    'prettyjson',
    'trash',
    'vtop'
    // ,'yo'
  ]
};
