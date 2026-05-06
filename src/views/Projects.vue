<template>
  <section class="page">
    <p class="sectionNo">04 — PROJECTS</p>
    <h2>ผลงานโครงการ</h2>

    <div class="projectGrid">
      <router-link
        v-for="work in projects"
        :key="work.id"
        :to="'/projects/' + work.id"
        class="projectBox"
      >
        <p class="bigNo">{{ work.no }}</p>
        <h3>{{ work.title }}</h3>
        <h4>{{ work.subTitle }}</h4>
        <p>{{ work.detail }}</p>

        <div class="skillBox">
          <span v-for="tool in work.tools" :key="tool">
            {{ tool }}
          </span>
        </div>

        <button>ดูรายละเอียด</button>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import projects from "../data/projects";
</script>