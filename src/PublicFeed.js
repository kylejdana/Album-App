import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import { db, snapshotToArray } from "./firebase";
import Photos from "./Photos";

export default function PublicFeed(props) {
  const [publicPhotos, setPublicPhotos] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collectionGroup("photos").onSnapshot(snapshot => {
      const updatedPhotos = snapshotToArray(snapshot);
      setPublicPhotos(updatedPhotos);
    });

    return unsubscribe;
  }, [props]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        paddingLeft: 10,
        paddingTop: 10
      }}
    >
      {publicPhotos.map(p => {
        return <PhotoCard photo={p} />;
      })}
    </div>
  );
}
