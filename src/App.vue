<template>
  <div>
    <nav class="navbar">
      <router-link to="/" class="logo">PHANUMAT</router-link>

      <div class="navMenu">
        <router-link to="/">PROFILE</router-link>
        <router-link to="/projects">PROJECTS</router-link>
        <router-link to="/experience">EXPERIENCE</router-link>
      </div>
    </nav>

    <router-view />
  </div>
</template>