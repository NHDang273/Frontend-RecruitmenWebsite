import React from "react";

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                {/* Các số ID được hiển thị bên trái */}
                <div style={idContainerStyle}>
                    <p>21521815 - Trần Quốc An</p>
                    <p>21521388 - Võ Thái Sơn</p>
                    <p>21521920 - Nguyễn Hải Đăng</p>
                    <p>21521873 - Đinh Hoàng Tâm Bình</p>
                </div>

                {/* Logo và các liên kết */}
                <div style={mainSectionStyle}>
                    <div style={logoStyle}>
                        Recruitment<span style={{ color: "#4CAF50" }}>Hub</span>
                    </div>
                    <div style={linkContainerStyle}>
                        <a href="#about" style={linkStyle}>
                            About Us
                        </a>
                        <a href="#contact" style={linkStyle}>
                            Contact
                        </a>
                        <a href="#privacy" style={linkStyle}>
                            Privacy Policy
                        </a>
                        <a href="#terms" style={linkStyle}>
                            Terms of Service
                        </a>
                    </div>
                    <div style={copyrightStyle}>
                        © {new Date().getFullYear()} RecruitmentHub. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

// CSS Styles
const footerStyle: React.CSSProperties = {
    backgroundColor: "#222",
    color: "#fff",
    padding: "20px 10px",
    marginTop: "20px",
    textAlign: "center",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif",
};

const footerContentStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    textAlign: "center",
    padding: "10px 20px",
};

const idContainerStyle: React.CSSProperties = {
    color: "#fff",
    fontFamily: "monospace",
    fontSize: "14px",
    textAlign: "left",
    lineHeight: "1.2", // Giảm khoảng cách giữa các dòng
    position: "absolute", // Cố định vị trí ID
    left: "20px", // Căn sát lề trái
    top: "50%", // Căn giữa theo chiều dọc
    transform: "translateY(-50%)", // Điều chỉnh lại để ID nằm chính giữa theo chiều dọc
    margin: "0", // Xóa margin mặc định
    padding: "0",
};



const mainSectionStyle: React.CSSProperties = {
    flex: 1,
    textAlign: "center",
};

const logoStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
};

const linkContainerStyle: React.CSSProperties = {
    marginBottom: "10px",
};

const linkStyle: React.CSSProperties = {
    color: "#4CAF50",
    textDecoration: "none",
    margin: "0px 10px",
    transition: "color 0.3s",
};

const copyrightStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#aaa",
};

export default Footer;
