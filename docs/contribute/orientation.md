---
id: orientation
title: How to contribute
description: We believe one of the things that makes Matic special is its coherent design and we seek to retain this defining characteristic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

## **Identifying an area to contribute**

There are several ways to identify an area where you can contribute to Matic:

- The easiest is just to email one of the [Community Maintainers](/docs/contribute/community-maintainers) saying “I want to help!”. They’ll work with you to find an area for you to contribute
- If you have a specific contribution in mind, confirm whether the contribution is appropriate first by reaching out in the the Matic Telegram group or contacting one of the [Community Maintainers](/docs/contribute/community-maintainers) directly
- If you do not have a specific contribution in mind, you can also browse the issues labelled as `help wanted` on the [Matic GitHub repos](https://github.com/maticnetwork)
- Issues that additionally have the `good first issue` label are considered ideal for first-timers
## **Add to Matic Documentation:**
  - If you need to add or change anything in Matic Documentation, please raise a PR to the `develop` branch. (Kindly check the sample PR)
  - Matic team will review the PR or reach out accordingly. 
  - Repository: https://github.com/maticnetwork/matic-docs
  - Sample PR: https://github.com/maticnetwork/matic-docs/pull/360
  > If you are adding a new document, it is recommended to just have a basic summary/introduction and a link to your github or documentation for more details.

## **Contribution guidelines**

We believe one of the things that makes Matic special is its coherent design and we seek to retain this defining characteristic. From the outset we defined some guidelines to ensure new contributions only ever enhance the project:

- **Quality**: Code in the Matic project should meet the style guidelines, with sufficient test-cases, descriptive commit messages, evidence that the contribution does not break any compatibility commitments or cause adverse feature interactions, and evidence of high-quality peer-review
- **Size**: The Matic project’s culture is one of small pull-requests, regularly submitted. The larger a pull-request, the more likely it is that you will be asked to resubmit as a series of self-contained and individually reviewable smaller PRs
- **Maintainability**: If the feature will require ongoing maintenance (eg support for a particular brand of database), we may ask you to accept responsibility for maintaining this feature

### Git Rules

We use `gitchangelog` for all of our repos for change logs. For that, we need to follow the following convention for commit message. There will be no merge if you are not following this convention.

**Commit message convention**

The following are suggestions to what might be useful to think about adding in your commit messages. You might want to separate roughly your commits into big sections:

- by intent (for example: new, fix, change ...)
- by object (for example: doc, packaging, code ...)
- by audience (for example: dev, tester, users ...)

Additionally, you could want to tag some commits:

- as “minor” commits that shouldn’t get output to your changelog (cosmetic changes, small typo in comments...)
- as “refactor” if you don’t really have any significative feature changes. Thus this should not also be part of the changelog displayed to final user for instance, but might be of some interest if you have a developer changelog.
- you could tag also with “api” to mark API changes or if it's a new API or similar

Try writing your commit message by targeting user functionality as often as you can.

**Example**

This is a standard git log `--oneline` to show how these information could be stored:

```
* 5a39f73 fix: encoding issues with non-ascii chars.
* a60d77a new: pkg: added ``.travis.yml`` for automated tests. 
* 57129ba new: much greater performance on big repository by issuing only one shell command for all the commits. (fixes #7)
* 6b4b267 chg: dev: refactored out the formatting characters from GIT.
* 197b069 new: dev: reverse ``natural`` order to get reverse chronological order by default. !refactor 
* 6b891bc new: add utf-8 encoding declaration !minor 
```

For more info please refer here ⇒ [https://stackoverflow.com/questions/3523534/good-ways-to-manage-a-changelog-using-git/23047890#23047890](https://stackoverflow.com/questions/3523534/good-ways-to-manage-a-changelog-using-git/23047890#23047890)

Refer this link for more details: [https://chris.beams.io/posts/git-commit/](https://chris.beams.io/posts/git-commit/)