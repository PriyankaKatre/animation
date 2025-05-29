
import React from 'react';
import Counter from '../components/counter';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'

describe('check counter', () =>{
    beforeEach(() =>{
         render(<Counter />);
    })
    it('test if count is 0', () =>{
        expect(screen.getByTestId('counter-value').textContent).toBe('count is 0')
    });
    it('increment count', () =>{       
        let button = screen.getByText('increment');
        fireEvent.click(button)
        expect(screen.getByTestId('counter-value')).toHaveTextContent('count is 1')
    })
    it('check multiple time increment', () =>{
        const incrementbtn = screen.getByText('increment');
        fireEvent.click(incrementbtn);
        fireEvent.click(incrementbtn);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('count is 2')
    })
    it('decrement count', () =>{
        const button = screen.getByText('decrement');
        const increment = screen.getByText('increment');
        fireEvent.click(increment)
        expect(screen.getByTestId('counter-value')).toHaveTextContent('count is 1')
        fireEvent.click(button)
        expect(screen.getByTestId('counter-value')).toHaveTextContent('count is 0');
    })
    it('check if multiple time decrement click', () =>{
        const decrementbtn = screen.getByText('decrement');
        const increment = screen.getByText('increment');
        fireEvent.click(increment);
        fireEvent.click(increment)
        fireEvent.click(decrementbtn);
        fireEvent.click(decrementbtn);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('count is 0')
    })
})