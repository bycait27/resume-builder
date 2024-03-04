import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    steps: ['Info', 'Skills', 'Projects', 'Work', 'Education'],
    activeStep: 0,
    prevSteps: [],
    header: [
        {
            title: 'Personal Info'
        },
        {
            title: 'Technical Skills'
        },
        {
            title: 'Coding Projects'
        },
        {
            title: 'Work Experience'
        },
        {
            title: 'Education'
        },
    ],
}

const stepperSlice = createSlice({
    name: 'stepper',
    initialState,
    reducers: {
        nextStep(state) {
            if (state.activeStep < state.steps.length - 1) {
                state.prevSteps = [...state.prevSteps, state.activeStep]
                state.activeStep += 1
            }
        },
        prevStep(state) {
            if (
                state.activeStep > 0 &&
                state.prevSteps.includes(state.activeStep - 1)
            ) {
                state.activeStep -= 1
            }
        },
        jumpToStep(state, { payload }) {
            if (state.prevSteps.includes(payload)) {
                state.activeStep = payload
            }
        },
    }
})

export const { nextStep, prevStep, jumpToStep } = stepperSlice.actions

export default stepperSlice.reducer