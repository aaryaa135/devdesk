import { useEffect, useState } from "react";

import api from "../services/api";

import OpportunityCard from "../components/OpportunityCard";

import OpportunityFilters from "../components/OpportunityFilters";


function OpportunityHub() {

  const [

    opportunities,

    setOpportunities

  ] = useState([]);

  const [

    search,

    setSearch

  ] = useState("");

  useEffect(()=>{

    fetchJobs();

  },[]);

  useEffect(()=>{

    fetchJobs();

  },[search]);

  const fetchJobs = async () => {

    try {

        const response = await api.get(

        `/opportunities?search=${search}`

        );

        setOpportunities(response.data);

    }

    catch (error) {

        console.log(error);

    }

    };

  return (

    <div className="p-8">

      <h1 className="text-5xl font-bold text-cyan-400 mb-8">

        Latest Opportunities

      </h1>

      <OpportunityFilters

        search={search}

        setSearch={setSearch}

      />

      <div className="grid lg:grid-cols-2 gap-6">

        {

          opportunities.map(

            job=>

            <OpportunityCard

              key={job.id}

              opportunity={job}

            />

          )

        }

      </div>

    </div>

  );

}

export default OpportunityHub;