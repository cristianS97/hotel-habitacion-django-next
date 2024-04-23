import { render, screen } from '@testing-library/react'
import { Cell } from '@/components/Cell'
import { Table } from '@/components/Table'
import { TBody } from '@/components/TBody'
import { THead } from '@/components/THead'
import { Row } from '@/components/Row'
import { TH } from '@/components/TH'

describe('Test a la tabla', () => {
    it('Renderizado de una tabla base', () => {
        const myTable = <Table>
            <THead>
                <Row headerRow={true}>
                    <TH value='Cabecera 1' />
                    <TH value='Cabecera 2' />
                </Row>
            </THead>
            <TBody>
                <Row headerRow={false}>
                    <Cell value="Prueba 1" />
                    <Cell value="Prueba 2" />
                </Row>
            </TBody>
        </Table>
    
        render(myTable)
    
        expect(screen.getByRole('table')).toBeInTheDocument()
        expect(screen.getAllByRole('cell').length).toBe(2)
        expect(screen.getAllByRole('cell')[0].textContent).toBe("Prueba 1")
        expect(screen.getAllByRole('cell')[1].textContent).toBe("Prueba 2")
        expect(screen.getAllByRole('columnheader').length).toBe(2)
        expect(screen.getAllByRole('columnheader')[0].textContent).toBe("Cabecera 1")
        expect(screen.getAllByRole('columnheader')[1].textContent).toBe("Cabecera 2")
    })

    it('Renderizado de una tabla de datos', () => {
        const fakeData = [
            {id: 1, nombre: 'pepe', edad: 28},
            {id: 2, nombre: 'sofia', edad: 29}
        ]
        const myTable = <Table>
            <THead>
                <Row headerRow={true}>
                    <TH value='Nombre' />
                    <TH value='Edad' />
                </Row>
            </THead>
            <TBody>
                <Row headerRow={false}>
                    <Cell value={fakeData[0].nombre} />
                    <Cell value={fakeData[0].edad} />
                </Row>
                <Row headerRow={false}>
                    <Cell value={fakeData[1].nombre} />
                    <Cell value={fakeData[1].edad} />
                </Row>
            </TBody>
        </Table>
    
        render(myTable)
    
        expect(screen.getByRole('table')).toBeInTheDocument()
        expect(screen.getAllByRole('cell').length).toBe(4)
        expect(screen.getAllByRole('cell')[0].textContent).toBe("pepe")
        expect(screen.getAllByRole('cell')[1].textContent).toBe("28")
        expect(screen.getAllByRole('cell')[2].textContent).toBe("sofia")
        expect(screen.getAllByRole('cell')[3].textContent).toBe("29")
        expect(screen.getAllByRole('columnheader').length).toBe(2)
        expect(screen.getAllByRole('columnheader')[0].textContent).toBe("Nombre")
        expect(screen.getAllByRole('columnheader')[1].textContent).toBe("Edad")
    })
})
