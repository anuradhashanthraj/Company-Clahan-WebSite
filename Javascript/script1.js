// Service details data
const services = {
    cloudMigration: {
        title: 'Cloud Migration',
        description: 'Our cloud migration services help organizations move their infrastructure and applications to the cloud, ensuring minimal downtime and maximum efficiency. We specialize in AWS, Azure, and Google Cloud Platform (GCP) migrations using industry-leading tools like AWS Migration Hub, Azure Migrate, and more.'
    },
    devOpsAutomation: {
        title: 'DevOps Automation',
        description: 'We implement DevOps automation practices that streamline the software development lifecycle with CI/CD pipelines, automated testing, and infrastructure as code (IaC). Using tools like Jenkins, GitLab CI/CD, Docker, Kubernetes, and Ansible, we enable faster and more reliable software releases.'
    },
    devSecOps: {
        title: 'DevSecOps',
        description: 'Our DevSecOps solutions integrate security practices into every stage of the DevOps pipeline. We use tools like Snyk, HashiCorp Vault, Aqua Security, and OWASP to ensure your code is secure from development through production.'
    },
    finOps: {
        title: 'FinOps',
        description: 'With our FinOps services, we help organizations optimize their cloud spending by providing visibility into cloud costs and implementing cost-efficient practices. We work with tools such as AWS Cost Explorer, CloudHealth, and Kubernetes Cost Monitoring to ensure efficient cloud financial management.'
    }
};

// Show service details
function showDetails(service) {
    const details = services[service];
    document.getElementById('service-title').textContent = details.title;
    document.getElementById('service-description').textContent = details.description;
    document.getElementById('service-details').style.display = 'block';
}

// Hide service details
function hideDetails() {
    document.getElementById('service-details').style.display = 'none';
}
