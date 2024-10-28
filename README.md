- 日本旅遊地圖

要在 GitLab Pages 上发布你的城市地图网站，需要一个名为 `.gitlab-ci.yml` 的文件配置持续集成 (CI)。以下是一个适用于静态网站的 `.gitlab-ci.yml` 模板，适合将你的项目发布到 GitLab Pages。

```yaml
# 使用默认的 GitLab Pages 镜像
image: alpine:latest

# 设置缓存以提升构建速度
cache:
  paths:
    - .public/

# 定义一个构建 job
pages:
  stage: deploy
  script:
    # 安装依赖项（如果需要 Node 或其他编译工具，可在这里安装）
    - mkdir .public
    - cp -r * .public/  # 将项目的所有文件复制到 .public 文件夹
  artifacts:
    paths:
      - .public
  only:
    - main  # 只在主分支运行构建
```

### 步骤解释：
1. **image**: 使用 Alpine Linux 镜像（适用于简单的静态站点）。
2. **cache**: 设置缓存路径，加快后续构建。
3. **pages job**: 在 `deploy` 阶段运行，将你的项目文件复制到 `.public` 目录。
4. **artifacts**: 指定 `.public` 目录为 artifacts，GitLab Pages 使用这个目录来部署静态网站。
5. **only**: 指定在 `main` 分支上部署（可以根据需求调整分支）。

将 `.gitlab-ci.yml` 文件放在项目根目录中并推送到 GitLab。构建成功后，项目将自动部署到 GitLab Pages。