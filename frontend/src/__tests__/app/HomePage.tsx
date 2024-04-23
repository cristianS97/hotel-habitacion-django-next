import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

it('Render home page', () => {
    render(<HomePage />)

    expect(screen.getByText('Templates')).toBeInTheDocument()
})