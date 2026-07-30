#!/usr/bin/env bash
# 在 source 分支工作区运行：构建静态文件并发布到 master（GitHub Pages 发布源）
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
WT="$ROOT/../xuany14-deploy"

echo "▶ 构建..."
npm run build

echo "▶ 准备发布目录 (worktree)..."
rm -rf "$WT"
if ! git worktree add -f "$WT" master 2>/dev/null; then
  git worktree add -f "$WT" origin/master -b master 2>/dev/null || git worktree add -f "$WT" -b master 2>/dev/null
fi

cd "$WT"
git checkout -f master 2>/dev/null || true
git rm -rf . >/dev/null 2>&1 || true
cp -r "$ROOT/dist/." .
: > .nojekyll
git add -A
if git commit -q -m "deploy: $(date +%Y-%m-%dT%H:%M:%S)"; then
  git push origin master
else
  echo "（无内容变化，跳过）"
fi
cd "$ROOT"
git worktree remove "$WT" --force 2>/dev/null || rm -rf "$WT"
echo "✅ 已发布 → https://xuany14.github.io"
