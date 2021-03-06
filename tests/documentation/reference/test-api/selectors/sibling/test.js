import { Selector } from 'testcafe';

fixture`Selector.sibling`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check count of the succeeding sibling elements.', async (t) => {
    // Selects all siblings of all input elements.
    const siblingsInput = Selector('input').sibling();

    // Selects all div elements' siblings
    // that go first in their parent's child lists.
    const closestSiblingsDiv = Selector('div').sibling(0);

    // Selects all select elements' siblings
    // that go last in their parent's child lists.
    const furthestSiblingsFieldset = Selector('select').sibling(-1);

    // Selects all fieldset elements that are succeeding siblings of an button element.
    const pSiblingsDiv = Selector('button').sibling('fieldset');

    await t.expect(siblingsInput.count).eql(6);
    await t.expect(closestSiblingsDiv.count).eql(9);
    await t.expect(furthestSiblingsFieldset.count).eql(1);
    await t.expect(pSiblingsDiv.count).eql(3);
});
