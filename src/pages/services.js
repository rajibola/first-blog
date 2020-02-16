import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="About" />
    <div
      style={{
        textAlign: `center`,
        padding: `2rem`,
      }}
    >
      <div
        style={{
          paddingBottom: `2rem`,
        }}
      >
        <h1
          style={{
            fontWeight: `400`,
          }}
        >
          We Are Always Available For You{" "}
        </h1>
        <span
          style={{
            fontSize: `4rem`,
            marginBottom: `3rem`,
          }}
        >
          ?
        </span>
      </div>
      <p>
        وهب الله لنبيه إبراهيم -عليه السالم - ابنـه إسماعيل، وكبر االبن،واشتدت
        قوته، ولكن أباه رأى مـنـامـا عجبا.. رأى أن الله - تعالى- قالت األم :
        وأين هو حتى يرانا ؟قالت البنت : إذا لم يكن يرانا فالله - تعالى -
        يرانا.وكان أمير المؤمنين عمر - رضي الله عنه - يمشي في طرقات المدينة،
        يتفقد أمور رعيته، فسمع ما جرى بين البنت وأمها فأعجبه ذلك، ثم نادى
      </p>
      <q>Allahu Akbaar</q>

      <p>
        <q>
          وهب الله لنبيه إبراهيم -عليه السالم - ابنـه إسماعيل، وكبر االبن،واشتدت
          قوته، ولكن أباه رأى مـنـامـا عجبا.. رأى أن الله - تعالى- قالت األم :
          وأين هو حتى يرانا ؟قالت البنت : إذا لم يكن يرانا فالله - تعالى -
          يرانا.وكان أمير المؤمنين عمر - رضي الله عنه - يمشي في طرقات المدينة،
          يتفقد أمور رعيته، فسمع ما جرى بين البنت وأمها فأعجبه ذلك، ثم نادى
        </q>
      </p>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Services
