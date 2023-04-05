import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import featuredProject from "../../public/images/projects/StockApp.png";
import MovieApp from "../../public/images/projects/MovieApp.png";
import recipe from "../../public/images/projects/pizza.png";
import contact from "../../public/images/projects/contact.png";
import weather from "../../public/images/projects/weather.png";
import codingAi from "../../public/images/projects/codingAi.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Sahanenes | Projects Page</title>
        <meta name="description" content="content" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 "
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="StockApp"
                img={featuredProject}
                summary="A Stock App using React,Redux,Mui,Tremor,Formik and Yup.It makes it easier to follow up all products on your warehouse.Users can create and manage purchases, sales and  generate reports on order status and history."
                link="/"
                type="Featured Project"
                github="https://github.com/sahanenes/StockApp"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="RecipeApp"
                img={recipe}
                link="https://recipe-app-special.netlify.app/"
                type="Project"
                github="https://github.com/sahanenes/recipe-app"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="CodingAi"
                img={codingAi}
                link="https://coding-ai-tau.vercel.app/"
                type="Project"
                github="https://github.com/sahanenes/Coding-AI"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="MovieApp"
                img={MovieApp}
                summary="Movie streaming apps are bringing users closer to cinema – enabling them to watch anything, anywhere and anytime."
                link="https://movie-app-project-search.netlify.app/"
                type="Featured Project"
                github="https://github.com/sahanenes/movie-app"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="WeatherApp"
                img={weather}
                link="https://sahanenes.github.io/Weather-app/"
                type="Project"
                github="https://github.com/sahanenes/Weather-app"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="ContactApp"
                img={contact}
                link="https://contact-firebase-app.netlify.app/"
                type="Project"
                github="https://github.com/sahanenes/fire-contact"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
