import type { ReactNode } from "react"
import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: ReactNode
}

const FeatureList: FeatureItem[] = [
  {
    title: "Discover Relevant Subreddits",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Use AI to find the most relevant subreddits for your product niche.
        Reach the right communities with zero guesswork.
      </>
    ),
  },
  {
    title: "Track User Conversations",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Monitor real user feedback in real time. Stay on top of product
        discussions, feature requests, and pain points as they unfold.
      </>
    ),
  },
  {
    title: "Spot Trends & Act Fast",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        BuzzInsights highlights emerging trends so you can prioritize fixes,
        optimize features, and stay ahead of the curve—before your competition
        does.
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
