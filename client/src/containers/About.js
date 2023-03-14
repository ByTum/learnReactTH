import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container col-md-5">
        <h3>สวัสดีครับ</h3>
        <p className="title text-justify mt-4 mb-4">
          ระบบนี้ผมได้เขียนขึ้นมาเพื่อเรียนรู้เกี่ยวกับ React
          ด้วยการซื้อคอร์สเรียนผ่านทางเว็บ Udemy
        </p>
        <h4 className="text-success">จาก ByTum</h4>
      </div>
      <Footer firstname="tum" lastname="tum lastname" />
    </div>
  );
};

export default About;
