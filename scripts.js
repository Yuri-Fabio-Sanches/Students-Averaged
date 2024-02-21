let students = [
    {
        name: 'Yuri',
        firstGrade: 9,
        secondGrade: 2
    },
    {
        name: 'Isabela',
        firstGrade: 7,
        secondGrade: 7
    },
    {
        name: 'Enzo',
        firstGrade: 3,
        secondGrade: 6
    },
    {
        name: 'Bruna',
        firstGrade: 4,
        secondGrade: 9
    }
]

function studentAveraged(firstGrade, secondGrade) {
    return (firstGrade + secondGrade) / 2
}

for(let student of students) {
    let averaged = studentAveraged(student.firstGrade, student.secondGrade)

    if(averaged >= 7){
        alert(`A média do(a) aluno(a) ${student.name} é: ${averaged} \nParabéns ${student.name}! Você foi aprovado(a) no concuros!`)
    }else {
        alert(`A média do(a) aluno(a) ${student.name} é: ${averaged} \nNão foi dessa vez,${student.name}. Tente novamente!`)
    }
}
