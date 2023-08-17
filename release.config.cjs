/* eslint-env es6 */
const commitVariants = [
  {
    type: "breaking",
    release: "minor",
    section: "BREAKING CHANGES",
    hidden: false,
  },
  {
    type: "breaking",
    release: "minor",
    section: "BREAKING CHANGES",
    hidden: false,
  },
  {
    type: "feat",
    release: "patch",
    section: "Features",
    hidden: false,
  },
  {
    type: "refactor",
    release: "patch",
    section: "Code Refactors",
    hidden: false,
  },
  {
    type: "improvement",
    release: "patch",
    section: "Improvements",
    hidden: false,
  },
  {
    type: "fix",
    release: "patch",
    section: "Bug Fixes",
    hidden: false,
  },
  {
    type: "perf",
    release: "patch",
    section: "Performance Improvements",
    hidden: false,
  },
  {
    type: "revert",
    release: "patch",
    section: "Reverts",
    hidden: false,
  },
  {
    type: "docs",
    release: "patch",
    section: "Documentation",
    hidden: false,
  },
  {
    type: "style",
    release: "patch",
    section: "Styles",
    hidden: false,
  },
  {
    type: "chore",
    release: "patch",
    section: "Miscellaneous Chores",
    hidden: false,
  },
  {
    type: "test",
    release: "patch",
    section: "Tests",
    hidden: false,
  },
  {
    type: "build",
    release: "patch",
    section: "Build System",
    hidden: false,
  },
  {
    type: "ci",
    release: "patch",
    section: "CI/CD",
    hidden: false,
  },
]

const releaseRules = [
  { breaking: true, release: "minor" },
  { revert: true, release: "patch" },
  ...commitVariants.map((variant) => ({
    type: variant.type,
    release: variant.release,
  })),
]

const notesTypes = commitVariants.map((variant) => ({
  type: variant.type,
  hidden: variant.hidden,
  section: variant.section,
  breaking: variant.breaking,
}))

module.exports = {
  branches: [{ name: "releases/v0.21.x" }],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalCommits",
        parserOpts: {
          noteKeywords: [
            "BREAKING CHANGE",
            "BREAKING CHANGES",
            "BREAKING",
            "NEW RELEASE",
          ],
        },
        releaseRules: releaseRules,
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalCommits",
        parserOpts: {
          noteKeywords: [
            "BREAKING CHANGE",
            "BREAKING CHANGES",
            "BREAKING",
            "NEW RELEASE",
          ],
        },
        presetConfig: {
          types: notesTypes,
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    "@semantic-release/npm",
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
