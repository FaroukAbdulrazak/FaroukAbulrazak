import Head from "next/head";
const FaroukHead = () => {
  return (
    <Head>
      <title>Farouk Abdulrazak - Portfolio</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="google-site-verification" content="r4Qo07nKEcEdxUhDb-LRTeZhXk6u5GvJXvQxanLzwbk" />
      <meta
        name="description"
        content="Portfolio of Farouk Abdulrazak — Web Developer and Front~ End Specialist. Explore my projects, skills, and professional experience."
      />
      <meta
        name="keywords"
        content="Farouk Abdulrazak, portfolio, web developer, frontend developer, senior frontend developer, JavaScript, jQuery, React, Next.js, SEO,"
      />
      <meta name="author" content="Farouk Abdulrazak" />

      <meta property="og:title" content="Farouk Abdulrazak – Portfolio" />
      <meta
        property="og:description"
        content="Explore my web development projects, Frontend works and skills."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://faroukabdulrazak.vercel.app/" />
      <meta
        property="og:image"
        content="https://faroukabdulrazak.vercel.app/assets/farouk-photo.jpeg"
      />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Farouk Abdulrazak – Portfolio" />
      <meta
        name="twitter:description"
        content="Explore my web development projects, Frontend works and skills."
      />
      <meta
        name="twitter:image"
        content="https://faroukabdulrazak.vercel.app/assets/farouk-photo.jpeg"
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      {/* Template Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Canonical URL */}
      <link rel="canonical" href="https://faroukabdulrazak.vercel.app/" />


      {/* Template CSS Files */}
      {/* <link rel="stylesheet" href="css/devicon.min.css" /> */}
      {/* <link rel="stylesheet" href="css/all.min.css" /> */}
      {/* <link rel="stylesheet" href="css/bootstrap.min.css" /> */}
      {/* <link rel="stylesheet" href="css/swiper-bundle.min.css" /> */}
      {/* <link rel="stylesheet" href="css/animate.min.css" /> */}
      {/* <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" /> */}
      {/* <link rel="stylesheet" href="css/style.css" /> */}
      {/* CSS Skin File */}
      {/* <link rel="stylesheet" href="css/skins/yellow.css" /> */}
      {/* Live Style Switcher - demo only */}

      {/* <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" /> */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Farouk Abdulrazak",
            url: "https://faroukabdulrazak.vercel.app/",
            sameAs: [
              "https://github.com/FaroukAbdulrazak",
              "https://www.linkedin.com/in/faroukabdulrazak",
              "https://www.instagram.com/farouk_abdulrazak",
              "https://www.facebook.com/Farouk.Abdulrazak"
            ],
            jobTitle: "Web Developer Front End Specialist",
            description:
              "Portfolio of Farouk Abdulrazak — Web Developer and Front End Specialist",
            hasPart: [
              { "@type": "AboutPage", name: "About Section" },
              { "@type": "ProfilePage", name: "Skills Section" },
              { "@type": "CreativeWork", name: "Projects Section" },
              { "@type": "Resume", name: "Resume Section" },
              { "@type": "ContactPage", name: "Contact Section" },
            ],
          }),
        }}
      ></script>

    </Head>
  );
};
export default FaroukHead;
