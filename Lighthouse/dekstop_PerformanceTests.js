#!/usr/bin/env node

const execSync = require("child_process").execSync;

// Define page URLs for each framework
const reactPages = [
  "http://localhost:3000/",
  "http://localhost:3000/doctor-signin",
  "http://localhost:3000/dashboard",
  "http://localhost:3000/doctor-profile",
  "http://localhost:3000/patient-register",
  "http://localhost:3000/patient-list",
  "http://localhost:3000/patient-profile",
  // Add URLs for other React pages
];

const vuePages = [
  "http://localhost:8080/",
  "http://localhost:8080/doctor-signin",
  "http://localhost:8080/dashboard",
  "http://localhost:8080/doctor-profile",
  "http://localhost:8080/patient-register",
  "http://localhost:8080/patient-list",
  "http://localhost:8080/patient-profile",
  // Add URLs for other Vue pages
];

const angularPages = [
  "http://localhost:4200/",
  "http://localhost:4200/doctor-signin",
  "http://localhost:4200/dashboard",
  "http://localhost:4200/doctor-profile",
  "http://localhost:4200/patient-register",
  "http://localhost:4200/patient-list",
  "http://localhost:4200/patient-profile",
  // Add URLs for other Angular pages
];

// Customizations for Lighthouse
const customizations =
  '--quiet --chrome-flags="--headless" --preset=desktop --only-categories=performance,accessibility,best-practices,seo --output=html';
const totalRuns = 10; // Change totalRuns to 10

for (let run = 0; run < totalRuns; run++) {
  console.log(`Running performance test ${run + 1}`);

  // Test React pages
  for (const url of reactPages) {
    try {
      execSync(`lighthouse ${url} ${customizations}`);
      console.log(`Performance test ${run + 1} for React page ${url} finished`);
    } catch (err) {
      console.log(`Performance test ${run + 1} for React page ${url} failed`);
    }
  }

  // Test Vue pages
  for (const url of vuePages) {
    try {
      execSync(`lighthouse ${url} ${customizations}`);
      console.log(`Performance test ${run + 1} for Vue page ${url} finished`);
    } catch (err) {
      console.log(`Performance test ${run + 1} for Vue page ${url} failed`);
    }
  }

  // Test Angular pages
  for (const url of angularPages) {
    try {
      execSync(`lighthouse ${url} ${customizations}`);
      console.log(
        `Performance test ${run + 1} for Angular page ${url} finished`
      );
    } catch (err) {
      console.log(`Performance test ${run + 1} for Angular page ${url} failed`);
    }
  }
}

console.log("All finished");
