import React, {useEffect} from 'react';
import AirportSearch from '../components/AirportSearch';
import AirportFilter from '../components/AirportFilter';
import AirportCard from '../components/AirportCard';
import {fetchAirports} from '../stores/actions/airportsAction';
import {useAppDispatch} from '../hooks';

const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect( ()=>{
    dispatch(fetchAirports())
  }, [])

    return (
        <div className="container mx-auto max-w-[760px] pt-5">
          <AirportSearch />

          <AirportFilter />

          <AirportCard />
        </div>
    );
};

export default MainPage;
