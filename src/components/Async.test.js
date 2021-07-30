import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request success', async () => {
        render(<Async />)
    
        // Memanggil data bertipe listitem menggunakan findAllByRole
        const listItemElements = await screen.findAllByRole('listitem');
    
        // Assert yang membuktikan bahwa list api datanya tidak kosong
        expect(listItemElements).not.toHaveLength(0);
    })

    test('renders posts if request success', async () => {
        // Call useeffect from Async Component
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: '1', title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'}],
        });
        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})
