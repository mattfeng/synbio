import React, { useState } from "react"
import * as styles from "../styles/File.module.scss"

const File = ({ filename, md5sum }) => {
  const [showHash, setShowHash] = useState(false)
  const [position, setPosition] = useState({ x: null, y: null })

  return (
    <>
      <span
        onMouseEnter={() => setShowHash(true)}
        onMouseLeave={() => setShowHash(false)}
        onMouseMove={event =>
          setPosition({ x: event.clientX, y: event.clientY })
        }
        className={styles.filenameContainer}
      >
        {filename}
        {showHash && (
          <span
            style={{ top: `${position.y - 20}px`, left: `${position.x + 5}px` }}
            className={styles.hashContainer}
          >
            (md5sum: {md5sum})
          </span>
        )}
      </span>
    </>
  )
}

export default File
