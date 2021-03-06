const Resume = () => (
    <div className="container">
    <h1 className="title-alt">Résumé / CV</h1>
    <p className="description-alt">A written résumé format and a quick-reference visual CV are provided below.</p>
    <div className="container">
      <div className="row">
        <div className="col">
        <a className="resume" href="https://resume.byronpolley.com/static/resume.pdf" target="_blank">View Résumé</a>
        </div>
        <div className="col">
        <a className="resume" href="https://xd.adobe.com/view/e566ac74-91e1-48b5-6826-514f4d4baf46-9357/?fullscreen&hints=off" target="_blank">View Visual CV</a>
        </div>
      </div>
    </div>
      <style jsx>{`
      .max-width: {
        max-width: 30rem;
      }
        .resume {
            display: block;
            text-align: center;
            margin: 1rem auto;
            background: black;
            border-radius: 3rem;
            padding: 0.5rem 1rem;
            text-transform: uppercase;
            color: white;
            font-weight: bold;
            max-width: 10rem;
            border: 1px solid transparent;
          }
          .resume:hover {
            background: white;
            color: black;
            cursor: pointer;
            border: 1px solid black;
          }
      `}</style>
    </div>
  )
  
  export default Resume