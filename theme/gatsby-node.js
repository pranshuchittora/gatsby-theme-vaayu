exports.createPages = ({ actions, reporter }) => {
  reporter.warn("make sure to load data from somewhere!")

  // TODO replace this with data from somewhere
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/page.js"),
    context: {
      heading: `वायु`,
      content: `
        <p>
        Vayu (Sanskrit pronunciation: [ʋaːjʊ], Sanskrit: वायु, IAST: Vāyu) is a primary Hindu deity, the lord of the winds, the father of Bhima and the spiritual father of Hanuman. He is also known as Anil ("Air, Wind"), Vyān (Air), Vāta ("Airy Element"), Tanun (The Wind), Pavan ("The Purifier"), and sometimes Prāṇa ("The Breath").
        </p>

      `,
    },
  })
}
