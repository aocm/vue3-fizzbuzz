describe('My First Test', () => {
  it('FizzBuzzが表示されること', () => {
    cy.visit('/')
    // FizzBuzzという文言が表示されていることを確認する
    expect(cy.contains('FizzBuzz')).to.exist
    cy.screenshot('FizzBuzzが表示されること')
  })
  it('1を入力したときにCheckしたら正解になること', () => {
    cy.visit('/')
    cy.get('input').type('1')
    cy.contains('check').click()
    expect(cy.contains('正解です')).to.exist
    cy.screenshot('1を入力したときにCheckしたら正解になること')
  })
})