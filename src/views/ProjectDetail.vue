<template>
  <section class="page">
    <router-link to="/projects" class="backBtn">← กลับไปหน้าผลงาน</router-link>

    <div v-if="work" class="detail">
      <p class="bigNo">{{ work.no }}</p>
      <h2>{{ work.title }}</h2>
      <h4>{{ work.subTitle }}</h4>

      <p class="detailText">{{ work.detail }}</p>
      <div class="imageGrid" v-if="work.images">
        <img
            v-for="img in work.images"
            :key="img"
            :src="img"
            class="projectImage"
            alt="project image"
        />
     </div>

      <div class="twoCol">
        <div class="box">
          <h3>ฟีเจอร์ของระบบ</h3>

          <ul>
            <li v-for="item in work.features" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="box">
          <h3>เทคโนโลยีที่ใช้</h3>

          <div class="skillBox">
            <span v-for="tool in work.tools" :key="tool">
              {{ tool }}
            </span>
          </div>
        </div>
      </div>

      <div class="box" v-if="work.award">
        <h3>รางวัล / ความสำเร็จ</h3>
        <p>🏆 {{ work.award }}</p>
      </div>
    </div>

    <div v-else class="box">
      <h2>ไม่พบข้อมูลผลงาน</h2>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import projects from "../data/projects";

const route = useRoute();
const id = route.params.id;

const work = projects.find((item) => item.id === id);
</script>