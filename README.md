- 日本旅遊地圖

要在 GitLab Pages 上发布你的城市地图网站，需要一个名为 `.gitlab-ci.yml` 的文件配置持续集成 (CI)。以下是一个适用于静态网站的 `.gitlab-ci.yml` 模板，适合将你的项目发布到 GitLab Pages。

```yaml
# 使用默认的 GitLab Pages 镜像
image: alpine:latest

# 定义 pages 任务
pages:
  stage: deploy
  script:
    # 创建 public 文件夹
    - mkdir -p public
    # 使用 rsync 排除 public 文件夹自身，复制所有内容到 public 中
    - apk add --no-cache rsync  # 安装 rsync
    - rsync -av --exclude='public' . public/
  artifacts:
    paths:
      - public  # 指定 public 文件夹作为 GitLab Pages 发布目录
  only:
    - main  # 仅在 main 分支上执行
```

### 步骤解释：
1. **image**: 使用 Alpine Linux 镜像（适用于简单的静态站点）。
2. **cache**: 设置缓存路径，加快后续构建。
3. **pages job**: 在 `deploy` 阶段运行，将你的项目文件复制到 `.public` 目录。
4. **artifacts**: 指定 `.public` 目录为 artifacts，GitLab Pages 使用这个目录来部署静态网站。
5. **only**: 指定在 `main` 分支上部署（可以根据需求调整分支）。

将 `.gitlab-ci.yml` 文件放在项目根目录中并推送到 GitLab。构建成功后，项目将自动部署到 GitLab Pages。