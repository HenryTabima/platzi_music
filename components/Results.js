import React from 'react'
import SectionType from './SectionType'
import Tracks from './Track'
import Albums from './Album'
import Artists from './Artist'

function Results(props) {
  return(
    <section>
      <SectionType title="Canciones" items={props.tracks.items}>
        { (props) => <Tracks key={props.id} {...props}/> }
      </SectionType>
      <SectionType title="Álbumes" items={props.albums.items}>
        { (props) => <Albums key={props.id} {...props}/> }
      </SectionType>
      <SectionType title="Artistas" items={props.artists.items}>
        { (props) => <Artists key={props.id} {...props}/> }
      </SectionType>
    </section>
  )
}

export default Results
