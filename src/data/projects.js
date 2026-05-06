const projects = [
  {
    id: "genniguru",
    no: "01",
    title: "GenniGuru",
    subTitle: "Web Application ด้านความงาม",

    detail:
      "แพลตฟอร์มชุมชนออนไลน์ด้านความงาม ที่ผสานระบบ E-commerce และ Community ไว้ในที่เดียว ผู้ใช้สามารถรีวิวผลิตภัณฑ์ แชร์ประสบการณ์ และเลือกซื้อสินค้าได้",

    features: [
      "ชุมชนออนไลน์แลกเปลี่ยนรีวิวผลิตภัณฑ์",
      "ระบบ E-commerce ซื้อขายสินค้าความงาม",
      "ระบบแนะนำผลิตภัณฑ์",
      "ระบบจัดการร้านค้าสำหรับผู้ขาย",
      "นำเสนอในงาน SCI-TECH SYMPOSIUM 2025",
    ],

    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Django",
      "MySQL",
    ],

    award: "รางวัลชมเชย SCI-TECH SYMPOSIUM 2025",

    images: [
      "/images/gennigurug11.png",
      "/images/gennigurug22.png",
      "/images/gennigurug33.png",
      "/images/gennigurug44.png",
    ],
  },
  {
    id: "carubtent",
    no: "02",
    title: "CARUBTENT",
    subTitle: "ระบบเช่ารถอุบล",
    detail:
      "ระบบจองรถเช่าออนไลน์ Full-stack สำหรับรถเช่าอุบลราชธานี รองรับลูกค้าจองออนไลน์ อัปโหลดสลิป และแอดมินจัดการการจอง",
    features: [
      "จองรถออนไลน์",
      "ตรวจสถานะการจอง",
      "อัปโหลดสลิปชำระเงิน",
      "Admin Dashboard",
      "Deploy ด้วย Docker",
    ],
    tools: ["React", "Golang", "PostgreSQL", "Docker", "JWT"],
    award: "",

    images: [
      "/images/localhost-5173-cars0.png",
      "/images/localhost-5173-cars1.png",
      "/images/localhost-5173-cars2.png",
      "/images/localhost-5173-cars3.png",
      "/images/localhost-5173-cars4.png",
      "/images/localhost-5173-cars5.png",
      "/images/localhost-5173-cars6.png",
      "/images/localhost-5173-cars7.png",
      "/images/localhost-5173-cars8.png",
      "/images/localhost-5173-cars9.png",
      "/images/localhost-5173-cars10.png",
      "/images/localhost-5173-cars11.png",
    ],
  },
  {
    id: "tastgo",
    no: "03",
    title: "TastGo Diary",
    subTitle: "ไดอารี่ออนไลน์",
    detail:
      "แอปพลิเคชันบันทึกไดอารี่ออนไลน์ ผู้ใช้สามารถสมัครสมาชิก เขียน แก้ไข ลบ และค้นหาบันทึกได้ พร้อมระบบ Mood Tracking",
    features: [
      "เขียนไดอารี่ออนไลน์",
      "แก้ไขและลบบันทึก",
      "Mood Tracking",
      "Tags & Search",
      "Calendar View",
    ],
    tools: ["Next.js", "Node.js", "Express", "Prisma", "PostgreSQL"],
    award: "",
    images: [
      "/images/testgo4.png",
      "/images/Testgo1.png",
      "/images/Testgo1.1.png",
      "/images/Testgo2.png",
      "/images/Testgo3.png",
      "/images/testgo5.png",
      
    ],
  },
{
  id: "wordpress",
  no: "04",
  title: "WordPress Internship Experience",
  subTitle: "WPBakery + Elementor + UX/UI",

  detail:
    "ประสบการณ์ฝึกงานด้านการพัฒนาเว็บไซต์ด้วย WordPress ตลอดระยะเวลา 4 เดือน โดยเริ่มจากการทำงานกับระบบ Legacy ที่ใช้ WPBakery และต่อยอดสู่การออกแบบ Portfolio Website ด้วย Elementor และ Obtech Theme ได้เรียนรู้ทั้งการออกแบบ UX/UI การจัดการ Layout การแก้ไขเว็บไซต์จริง การทำ Responsive รวมถึงการทำงานร่วมทีมและการรับ Feedback จากพี่เลี้ยงในสภาพแวดล้อมการทำงานจริง",

  features: [
    "พัฒนาและปรับปรุงหน้า About Us บน WordPress + WPBakery",
    "จัด Layout ด้วย Row / Column และ Custom CSS",
    "แก้ Hover Effect และ Responsive Design",
    "ออกแบบ Portfolio Website ด้วย Elementor + Obtech Theme",
    "ตั้งค่า WordPress Open Source + phpMyAdmin + MySQL",
    "เรียนรู้ UX/UI และการวางโครงสร้างเว็บไซต์จริง",
    "ทำงานร่วมทีม รับ Feedback และช่วยสอนเพื่อนร่วมทีม",
    "ฝึกการทำงานกับระบบ Legacy อย่างปลอดภัยและมีขั้นตอน",
  ],

  tools: [
    "WordPress",
    "WPBakery",
    "Elementor",
    "Obtech Theme",
    "HTML",
    "CSS",
    "UX/UI",
    "Responsive Design",
    "MySQL",
    "phpMyAdmin",
    "Adobe Firefly",
    "Canva",
    "Photoshop",
  ],

  award: "",

  images: [
    "/images/month1-full.png",
    "/images/month4-full1.png",
  ],
},
{
  id: "lineoa",
  no: "05",
  title: "LINE OA Automation",
  subTitle: "Dental Clinic Appointment System",

  detail:
    "ระบบนัดหมายคลินิกทันตกรรมผ่าน LINE Official Account โดยออกแบบ Workflow ให้ผู้ใช้สามารถพิมพ์คำว่า “นัดแพทย์” ผ่าน LINE OA แล้วระบบจะส่งลิงก์ Google Form อัตโนมัติ พร้อมเชื่อมต่อ Make, Google Sheets และ Google Apps Script เพื่อจัดการข้อมูลและแจ้งเตือนแบบ Real-time",

  features: [
    "Step 1 — เพิ่มเพื่อน LINE OA เพื่อเริ่มใช้งานระบบ",
    "Step 2 — ผู้ใช้พิมพ์ “นัดแพทย์” ผ่านแชท LINE OA",
    "Step 3 — ระบบส่งลิงก์ Google Form แบบอัตโนมัติ",
    "Step 4 — Make เก็บ LINE userId และสร้าง Prefill Form",
    "Step 5 — ผู้ใช้กรอกข้อมูลนัดหมาย เช่น ชื่อ เบอร์ วันเวลา",
    "Step 6 — ข้อมูลถูกบันทึกลง Google Sheets แบบ Real-time",
    "Step 7 — Google Apps Script แจ้งเตือนแอดมินทันที",
    "Step 8 — ระบบส่งข้อความยืนยันกลับไปยังผู้ป่วยผ่าน LINE OA",
  ],

  tools: [
    "LINE OA",
    "Make",
    "Google Apps Script",
    "Google Forms",
    "Google Sheets",
    "Webhook",
    "Messaging API",
    "Automation",
  ],

  award: "",

  images: [
    "/images/step1.png",
    "/images/step2.png",
    "/images/step3.png",
    "/images/step4.png",
    "/images/step5.png",
    "/images/step6.png",
    "/images/step7.png",
    "/images/step8.png",
  ],
},
{
  id: "bakery",
  no: "06",
  title: "Bakery Management System",
  subTitle: "React + Django REST Framework",

  detail:
    "ระบบจัดการร้านเบเกอรีสำหรับผู้ใช้และผู้ดูแลระบบ พัฒนา Frontend ด้วย React.js และ Tailwind CSS เชื่อมต่อ Backend ด้วย Django REST Framework และใช้ MongoDB เป็นฐานข้อมูล ระบบรองรับการจัดการสินค้า ตะกร้าสินค้า การสั่งซื้อ การชำระเงิน และหน้าแอดมินสำหรับตรวจสอบคำสั่งซื้อทั้งหมด",

  features: [
    "ระบบ Login สำหรับเข้าสู่ระบบ",
    "หน้า Home แสดงหน้าต้อนรับร้านเบเกอรี",
    "เพิ่มสินค้าใหม่พร้อมอัปโหลดรูปภาพ",
    "แก้ไขและลบข้อมูลสินค้า",
    "แสดงรายการสินค้าแยกตามหมวดหมู่",
    "เพิ่ม ลด และลบสินค้าในตะกร้า",
    "หน้า Checkout สำหรับเลือกวิธีรับสินค้าและกรอกข้อมูลจัดส่ง",
    "หน้า Admin Orders สำหรับตรวจสอบคำสั่งซื้อทั้งหมด",
  ],

  tools: [
    "React.js",
    "Tailwind CSS",
    "Django",
    "Django REST Framework",
    "MongoDB",
    "Djongo",
    "Axios",
    "REST API",
  ],

  award: "",

  images: [
    "/images/bakerysys1.png",
    "/images/bakerysys2.png",
    "/images/bakerysys3.png",
    "/images/bakerysys4.png",
    "/images/bakerysys5.png",
    "/images/bakerysys6.png",
    "/images/bakerysys7.png",
    "/images/bakerysys8.png",
  ],
},
{
  id: "expense",
  no: "07",
  title: "Expense Record System",
  subTitle: "Mini Project ระบบจัดการบันทึกการใช้จ่าย",

  detail:
    "ระบบจัดการบันทึกการใช้จ่ายส่วนบุคคล พัฒนาขึ้นเพื่อช่วยให้ผู้ใช้สามารถจัดเก็บและจัดการข้อมูลค่าใช้จ่ายได้อย่างเป็นระบบ รองรับการสมัครสมาชิก เข้าสู่ระบบ ออกจากระบบ เพิ่ม แก้ไข ลบ และค้นหารายการค่าใช้จ่าย โดยมีการจัดการสิทธิผู้ใช้ด้วย JWT Token เพื่อความปลอดภัยของข้อมูล",

  features: [
    "สมัครสมาชิกและเข้าสู่ระบบผู้ใช้",
    "ออกจากระบบอย่างปลอดภัย",
    "เพิ่มข้อมูลค่าใช้จ่าย",
    "แก้ไขข้อมูลค่าใช้จ่าย",
    "ลบข้อมูลค่าใช้จ่าย",
    "ค้นหารายการค่าใช้จ่าย",
    "จัดการสิทธิผู้ใช้ด้วย JWT Token",
    "เชื่อมต่อ API สำหรับใช้งานร่วมกับ Frontend",
  ],

  tools: [
    "Go",
    "Gin Framework",
    "PostgreSQL",
    "JWT Token",
    "REST API",
    "Backend API",
  ],

  award: "",

  images: [
    "/images/mini1.png",
    "/images/mini2.png",
  ],
},
];

export default projects;