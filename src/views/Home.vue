<template>
  <section class="hero">
    <div class="heroLeft">
      <p class="miniTitle">— SOFTWARE PORTFOLIO 2026</p>

      <h1 class="mainTitle">
        SOFT<br />
        <span>WARE</span>
        <br /><br />
        PORT<br />
        <span>FOLIO</span>
      </h1>

      <p class="roleText">WEB DEVELOPER · IT SUPPORT · PROGRAMMER</p>
    </div>

    <div class="heroRight">
      <img src="/images/profile.jpg" alt="Phanumat" />
    </div>
  </section>

  <section class="content">
    <p class="sectionNo">01 — PROFILE</p>
    <h2>ประวัติส่วนตัว</h2>

    <div class="profileGrid">
      <div class="box">
        <h3>นางสาว ภานุมาศ ละเลิศ</h3>
        <h4>Phanumat Laloed</h4>

        <p>📞 0945219374</p>
        <p>✉️ phanumatlaloed@gmail.com</p>
        <p>📍 Ubon Ratchathani, Thailand</p>
        <p>🎂 9 กรกฎาคม 2546</p>
      </div>

      <div class="box">
        <p>
          ข้าพเจ้าเป็นนักศึกษาระดับปริญญาตรี
          สาขาวิทยาการข้อมูลและนวัตกรรมซอฟต์แวร์
          จากมหาวิทยาลัยอุบลราชธานี มีความรู้ด้านการพัฒนาโปรแกรม
          เว็บไซต์ และแอปพลิเคชัน รวมถึงการจัดการฐานข้อมูล
          และการแก้ไขปัญหาทางเทคโนโลยีสารสนเทศ
        </p>

        <p>
          มีความกระตือรือร้นในการเรียนรู้เทคโนโลยีใหม่ ๆ อยู่เสมอ
          สามารถทำงานร่วมกับผู้อื่นได้อย่างมีประสิทธิภาพ
          มีความรับผิดชอบ ใส่ใจรายละเอียดของงาน
          และพร้อมพัฒนาตนเองอย่างต่อเนื่อง
        </p>
      </div>
    </div>
  </section>

  <section class="content">
    <p class="sectionNo">02 — EDUCATION</p>
    <h2>การศึกษา</h2>

    <div class="box">
      <h3>มหาวิทยาลัยอุบลราชธานี</h3>
      <p>ปริญญาตรี คณะวิทยาศาสตร์</p>
      <p>สาขาวิทยาการข้อมูลและนวัตกรรมซอฟต์แวร์</p>
      <p>ปีการศึกษา 2565 – 2569</p>
      <h3 class="pinkText">GPAX 3.60</h3>
    </div>
  </section>

  <section class="content">
    <p class="sectionNo">03 — SKILLS</p>
    <h2>ความสามารถ & ทักษะ</h2>

    <div class="skillBox">
      <span v-for="skill in skills" :key="skill">
        {{ skill }}
      </span>
    </div>
  </section>

  <section class="content">
    <p class="sectionNo">04 — AWARD</p>
    <h2>รางวัลที่ได้รับ</h2>

    <div class="box">
      <h3>🏆 SCI-TECH SYMPOSIUM 2025</h3>
      <p>รางวัลชมเชย การนำเสนอผลงานวิจัยแบบโปสเตอร์</p>
      <p>คณะวิทยาศาสตร์ มหาวิทยาลัยอุบลราชธานี</p>
    </div>
  </section>
</template>

<script setup>
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Django",
  "React",
  "Vue.js",
  "MySQL",
  "MongoDB",
  "SQLite",
  "PostgreSQL",
  "WordPress",
  "Java",
  "Go",
  "Flutter",
  "Windows / Linux",
  "IT Support",
  "LINE OA",
  "Microsoft Office",
];
</script>