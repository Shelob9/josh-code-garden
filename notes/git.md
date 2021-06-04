---
title: Git
slug: git
---

## Revert A Merge Commit

To do a [git revert](https://git-scm.com/docs/git-revert) of a merge commit, you
[need to know which parent number to use](https://stackoverflow.com/a/7100005). Use `git log <merge-commit-hash>` to view log for the merge commit. It will show two hashes for "merge", for example `Merge: 41a7cd6 e4e47ca`.

The first one should be the commit before the branch was branched off of the main branch. The second should be the last commit in the branch before the merge. Using a value of 1 for `-m` the mainline argument, reverts to the first hash, 2 coresponds to the second hash.

```bash
git log <merge-commit-hash> -m 1
```

