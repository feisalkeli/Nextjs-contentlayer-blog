"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = 2 }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        if (error) console.error("error incrementing view count", error);
      } catch (error) {
        console.error(`error occured when implementing view count: ${error}`);
      }
    };

    if (!noCount) {
      incrementView();
    }
  }, [noCount, slug]);
  useEffect(() => {
    const viewCount = async () => {
      try {
        let { data: views, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single();

        if (error) console.error("error incrementing view count", error);
        setViews(views ? views.count : 0);
      } catch (error) {
        console.error(`error occured when implementing view count: ${error}`);
      }
    };

    viewCount();
  }, [noCount, slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else return null;
};

export default ViewCounter;
