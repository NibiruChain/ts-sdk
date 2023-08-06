module.exports = {
  branches: [{ name: "releases/v0.21.x" }, { name: "releases/v0.19.x" }],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalCommits",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalCommits",
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    ["@semantic-release/npm"],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} \n\n${nextRelease.notes} [skip ci]",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} \n\n${nextRelease.notes} [skip ci]",
      },
    ],
  ],
}
