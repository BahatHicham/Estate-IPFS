// import Image from "next/image";
// import List from "./list/page";
// import Navbar from "./pages/navbar";
// import LandingPage from "./pages/landingPage";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className='homePage'>
    <div className="textContainer">
      <div className="wrapper">
      <h1 className='title'>Explore Listings & Find Your Dream Space</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Totam fugit ullam ad incidunt quam, hic reprehenderit illo aperiam quae
         illum quisquam atque laborum similique pariatur reiciendis quas libero perspiciatis rem!
      </p>
      {/* <SearchBar /> */}
      <div className="boxes">
        <div className="box">
          <h1>16+</h1>
          <h2>Years of Experience</h2>
        </div>
        <div className="box">
          <h1>200</h1>
          <h2>Award Gained</h2>
        </div>
        <div className="box">
          <h1>1200+</h1>
          <h2>Property Ready</h2>
        </div>
      </div>
      </div>
    </div>
    <div className="imgContainer">
      <Image src="/images/land.png"
      width={1000}
      height={399}
       alt="landing logo" />
    </div>
    
  </div>
  <footer className="d-flex mt-4 pt-5 justify-content-center">
               <p>&copy; 2024 Estate Listing. All rights reserved.</p>
      </footer>
      </div>
  
    // <div>
    //    <div style={styles.container}>
    //         <header style={styles.header}>
    //             <h1>Welcome to Pinata App</h1>
    //             <p>Your one-stop solution for all your needs</p>
    //             <Image
    //       className="dark:invert"
    //       src="/images/landing.jpg"
    //       alt="Next.js logo"
    //       width={500}
    //       height={500}
    //       priority
    //      />
    //         </header>
    //         <main style={styles.main}>
    //             <section style={styles.section}>
    //                 <h2>About Us</h2>
    //                 <p>We provide the best services to help you achieve your goals.</p>
    //             </section>
    //             <section style={styles.section}>
    //                 <h2>Features</h2>
    //                 <ul>
    //                     <li>Feature 1</li>
    //                     <li>Feature 2</li>
    //                     <li>Feature 3</li>
    //                 </ul>
    //             </section>
    //         </main>
    //         <footer style={styles.footer}>
    //             <p>&copy; 2024 Pinata App. All rights reserved.</p>
    //         </footer>
    //     </div>
    //   {/* <Navbar/> */}
    //      {/* <List/> */}
    //      {/* <LandingPage/> */}
    // </div>
 
  );
}


// const styles = {
//   container: {
//       fontFamily: 'Arial, sans-serif',
//       textAlign: 'center',
//       padding: '20px',
//   },
//   header: {
//       backgroundColor: '#f8f9fa',
//       padding: '20px',
//       borderBottom: '1px solid #dee2e6',
//   },
//   main: {
//       padding: '20px',
//   },
//   section: {
//       margin: '20px 0',
//   },
//   footer: {
//       backgroundColor: '#f8f9fa',
//       padding: '10px',
//       borderTop: '1px solid #dee2e6',
//   },
// };

















































    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="https://nextjs.org/icons/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>