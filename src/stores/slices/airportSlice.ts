import {IAirport} from '../../modules/modules';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AirportState {
  loading: boolean;
  error: string;
  airports: IAirport[];
}

const initialState: AirportState ={
  loading: false,
  error: '',
  airports: []
}

export const airportsSlice = createSlice({
  name: 'aiports',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IAirport[]>) {
      state.loading = false;
      state.airports = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message
    }
  }

})

export default airportsSlice.reducer
