# GitHub Features — A Complete Reference

A tour of GitHub's major features, grouped by area. Items you used while
deploying this portfolio are marked **(used here)**.

---

## 1. Core: Git Hosting & Repositories

- **Repository** — a project's home: code, history, issues, settings. Can be
  **public** (anyone reads) or **private** (you control access). **(used here)**
- **Branches** — parallel lines of work; `master`/`main` is the default. **(used here)**
- **Commits** — snapshots of changes with a message and author. **(used here)**
- **Tags / Releases** — mark a point in history (e.g. `v1.0`); Releases attach
  downloadable assets and notes.
- **Forks** — your own copy of someone else's repo to experiment or contribute.
- **Gists** — lightweight snippet/file sharing, versioned like mini-repos.
- **`.gitignore` / `.gitattributes`** — control what Git tracks and how. **(used here)**
- **README / wikis** — project docs (README shown on repo home). **(used here)**
- **Git LFS** — Large File Storage for big binaries (videos, datasets).

---

## 2. Collaboration

- **Pull Requests (PRs)** — propose merging one branch into another; the unit of
  code review. Supports inline comments, reviews, approvals, required checks.
- **Issues** — track bugs, tasks, ideas. Labels, milestones, assignees.
- **Discussions** — forum-style Q&A and conversations, separate from issues.
- **Projects** — kanban boards / tables for planning across repos.
- **Code review tools** — suggestions, review requests, CODEOWNERS (auto-request
  reviewers by file path).
- **Mentions & notifications** — `@user`, cross-references between issues/PRs.

---

## 3. GitHub Actions (CI/CD & Automation) **(used here)**

The automation platform that runs workflows on GitHub-hosted machines.

- **Workflow** — a `.yml` file in `.github/workflows/` defining an automated
  process (triggers + jobs). **(used here — `deploy.yml`)**
- **Trigger (`on:`)** — what starts it: `push`, `pull_request`, `schedule`
  (cron), `workflow_dispatch` (manual), and more. **(used here)**
- **Job** — a set of steps that run on one fresh VM (`runs-on`). **(used here)**
- **Runner** — the machine that executes a job. **GitHub-hosted** (Ubuntu/
  Windows/macOS, disposable) or **self-hosted** (your own). **(used here: ubuntu-latest)**
- **Step** — a single task: a shell command (`run:`) or a reusable action
  (`uses:`). **(used here)**
- **Action** — a reusable, shareable plugin a step calls, e.g.
  `actions/checkout`, `actions/setup-node`. Published in their own repos,
  versioned by tag/SHA. **(used here)**
- **Secrets & variables** — encrypted values (tokens, keys) injected at runtime,
  masked in logs. **(used here — `DEPLOY_TOKEN`)**
- **Artifacts** — files passed between jobs or downloaded after a run.
- **Matrix builds** — run the same job across many versions/OSes in parallel.
- **Reusable workflows & composite actions** — DRY automation across repos.
- **Environments** — deployment targets with protection rules / approvals.
- **Billing** — free & unlimited for public repos; monthly minute quota for
  private (macOS/Windows cost more minutes). **(used here — free, public)**

---

## 4. GitHub Pages (Static Hosting) **(used here)**

- **Static site hosting** straight from a repo. **(used here)**
- **User/Org page** — `username.github.io`, served from the `username.github.io`
  repo at the root URL. **(used here — honey93.github.io)**
- **Project page** — `username.github.io/repo/`, served from any repo.
- **Source** — deploy from a branch (`/` or `/docs`) or via GitHub Actions.
- **`.nojekyll`** — disables Jekyll processing so folders like `_nuxt/` aren't
  stripped. **(used here — essential for the Nuxt build)**
- **Custom domains + HTTPS** — point your own domain (CNAME) with free TLS.

---

## 5. Authentication & Access

- **Personal Access Tokens (PATs)** — credentials for API/Git over HTTPS:
  - **Classic** — broad scopes (`repo`, `workflow`); all-or-nothing per category.
  - **Fine-grained** — per-repo + per-permission (e.g. Contents: read/write),
    with expiry. Recommended. **(used here — scoped to honey93.github.io)**
- **Deploy keys** — an SSH key granting access to a single repo (narrower than a
  PAT; no account-wide reach).
- **SSH keys** — authenticate Git over SSH for your account.
- **GitHub Apps / OAuth Apps** — scoped integrations for third-party services
  (finer-grained and revocable, used by bots/CI/SaaS).
- **`GITHUB_TOKEN`** — an automatic, short-lived token Actions get for their own
  repo (no setup; can't reach other repos — which is why cross-repo needs a PAT).
- **2FA / Passkeys** — account-level security.
- **Permissions / roles** — read, triage, write, maintain, admin.

---

## 6. Security Features

- **Dependabot** — alerts + automated PRs for vulnerable/outdated dependencies.
  **(seen here — the 8 PRs / 141 alerts on the Nuxt 2 deps)**
- **Code scanning (CodeQL)** — static analysis to find vulnerabilities in code.
- **Secret scanning** — detects committed credentials (API keys, tokens) and can
  block pushes. **(relevant here — the committed `test_keys` we removed)**
- **Security advisories** — private vulnerability reporting & disclosure.
- **Branch protection rules** — require reviews/checks, block force-push/deletion.
- **Push protection** — stop secrets from being pushed in the first place.

---

## 7. Packages & Distribution

- **GitHub Packages** — host npm, Docker, Maven, NuGet, RubyGems packages.
- **Container Registry (ghcr.io)** — host Docker/OCI images.
- **Releases & release assets** — versioned downloads tied to tags.

---

## 8. Developer Experience / Tooling

- **Codespaces** — full cloud dev environments (VS Code in the browser).
- **GitHub CLI (`gh`)** — manage repos, PRs, issues, runs from the terminal.
- **GitHub Desktop** — GUI Git client.
- **Copilot** — AI pair programmer (code completion, chat, PR summaries, agents).
- **REST & GraphQL APIs** — programmatic access to nearly everything.
- **Webhooks** — push events to external services on repo activity.
- **Markdown everywhere** — issues, PRs, README, comments; plus Mermaid diagrams.

---

## 9. Account, Org & Insights

- **Organizations & Teams** — group repos and people with shared permissions.
- **Enterprise** — SSO/SAML, audit logs, advanced policy controls.
- **Insights / Pulse** — contribution graphs, traffic, dependency graph.
- **Sponsors** — fund open-source maintainers.
- **Profile README** — a personal landing page on your GitHub profile
  (a repo named after your username, with a README).

---

## How they connected in THIS project

```
Source repo (Personal-Website)
  └─ push to master
       └─ GitHub Actions workflow (deploy.yml)
            ├─ uses actions: checkout, setup-node
            ├─ builds the Nuxt site (npm run generate)
            ├─ adds .nojekyll
            └─ pushes output to honey93.github.io  ← using DEPLOY_TOKEN (fine-grained PAT secret)
                 └─ GitHub Pages serves it at https://honey93.github.io/
```

Features touched: **Repositories, Branches, Commits, Actions (workflow/job/
steps/actions/secrets/runners), Pages, .nojekyll, fine-grained PAT, Dependabot
(alerts), Secret scanning (the keys), gitignore, README.**

---

# GitHub as a Business

> ⚠️ Prices and plan details change often. Figures below are approximate and for
> orientation — verify current numbers at github.com/pricing.

## 10. Pricing Strategy

GitHub uses a **freemium + tiered SaaS** model: a genuinely useful free tier to
drive adoption, with paid tiers that unlock collaboration, security, and scale.

- **Free** — $0. For individuals, open source, students. Unlimited public/private
  repos, unlimited collaborators, Actions free on public repos (+ a private
  quota), Pages, Dependabot.
- **Pro** — ~$4/user/mo. For power individuals. More Actions/Packages quota,
  advanced tools, more insights.
- **Team** — ~$4/user/mo. For small teams/orgs. Protected branches, code owners,
  team management, more CI minutes.
- **Enterprise** — ~$21/user/mo. For large orgs. SSO/SAML, audit logs, GitHub
  Connect, advanced security add-on, self-host option (GitHub Enterprise Server).

**Add-ons billed separately:**
- **GitHub Copilot** — ~$10/mo individual, ~$19/user/mo business, plus an enterprise tier.
- **Advanced Security (GHAS)** — per-committer, for code/secret scanning at scale.
- **Actions / Packages overages** — pay-as-you-go beyond included minutes/storage.
- **Codespaces** — metered by compute-hour + storage.
- **Larger / GPU runners** — premium per-minute rates.

**Strategy levers:**
- *Free for public/OSS* → network effects, mindshare, the default place for code.
- *Per-seat pricing* → revenue scales with team size.
- *Usage metering* (Actions, Codespaces, Packages) → cloud-style consumption revenue.
- *Security & compliance up-sell* → captures enterprise budgets.
- *Copilot* → high-margin AI add-on, fast-growing line.

## 11. Revenue Strategy / How GitHub Makes Money

1. **Subscriptions (per-seat)** — Team & Enterprise seats are the core recurring revenue.
2. **Usage-based / consumption** — Actions minutes, Codespaces compute, Packages
   storage, larger runners (cloud economics; grows with engagement).
3. **AI (Copilot)** — per-seat add-on; strategically central to GitHub's future.
4. **Advanced Security** — premium per-committer security suite for enterprises.
5. **Marketplace** — a cut of third-party Apps/Actions sold through it.
6. **Enterprise / compliance** — SSO, audit, support, self-hosted (Enterprise Server).

**Owned by Microsoft** (acquired 2018, ~$7.5B). GitHub is a strategic asset:
it funnels developers toward **Azure** (cloud), **VS Code**, and **Copilot/OpenAI**,
and anchors Microsoft's "developer platform" flywheel. Its revenue is reported
within Microsoft's cloud/developer segments rather than standalone.

## 12. Competitors

**Git hosting / DevOps platforms:**
- **GitLab** — closest all-in-one rival; strong built-in CI/CD, self-managed
  option, security; popular with enterprises wanting one integrated tool.
- **Bitbucket (Atlassian)** — tight Jira/Confluence integration; favored by
  Atlassian-stack teams.
- **Azure DevOps (Microsoft)** — Microsoft's own enterprise DevOps suite
  (sibling product; overlaps but targets different buyers).
- **Gitea / Codeberg / SourceForge** — lightweight, self-hosted, or older alternatives.

**By feature area:**
- **CI/CD vs Actions:** Jenkins, CircleCI, Travis CI, GitLab CI, Buildkite.
- **Static hosting vs Pages:** Netlify, Vercel, Cloudflare Pages, AWS Amplify.
- **AI vs Copilot:** Cursor, Cody (Sourcegraph), Amazon Q Developer, Tabnine,
  Codeium/Windsurf, JetBrains AI.
- **Code search/intelligence:** Sourcegraph.
- **Packages/registries:** npm, Docker Hub, JFrog Artifactory.

## 13. Market Position

- **Dominant** in public/open-source hosting and developer mindshare — the de
  facto home for code (100M+ developers).
- **Moats:** network effects (your network/portfolio/OSS lives there), the
  developer-experience flywheel (Actions + Codespaces + Copilot + APIs), and
  Microsoft's enterprise distribution.
- **Strategy:** be the end-to-end "developer platform" — plan → code → build →
  secure → deploy → collaborate — increasingly with AI woven throughout.
- **Risks:** GitLab's integrated DevOps story, Vercel/Netlify owning modern
  front-end deploy, and a fast-moving AI-coding field (Cursor et al.) pressuring
  the Copilot lead.
