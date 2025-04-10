FROM jenkins/jenkins:lts

USER root

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    python3 python3-pip \
    apt-transport-https \
    ca-certificates \
    software-properties-common \
    docker.io \
    git \
    unzip \
    && apt-get clean

# Install Node.js and npm (v18)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Install ESLint globally (optional if project installs locally)
RUN npm install -g eslint

# Install Docker Compose v2
RUN curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose

# Install Ansible and ansible-lint
RUN pip3 install --break-system-packages ansible ansible-lint

# 🔥 Install SonarScanner CLI
RUN curl -Lo /tmp/sonar-scanner.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip && \
    unzip /tmp/sonar-scanner.zip -d /opt && \
    ln -s /opt/sonar-scanner-*/bin/sonar-scanner /usr/local/bin/sonar-scanner && \
    rm /tmp/sonar-scanner.zip

ENV SONAR_SCANNER_OPTS="-server"

USER jenkins
