import type { ReactNode } from "react"
import { motion } from "framer-motion"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import Heading from "@theme/Heading"
import styles from "./index.module.css"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Heading as="h1" className="hero__title text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {siteConfig.title}
          </Heading>
          
          <motion.p 
            className="hero__subtitle text-xl mt-6 text-gray-600 dark:text-gray-300"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div 
            className={styles.buttons}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link
              className="button button--primary button--lg px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform"
              to="/docs/Introduction"
            >
              Get Started Quickly ⏱️
            </Link>
          </motion.div>
        </motion.div>

        {/* Background gradient blob */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
        </div>
      </div>
    </header>
  )
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}