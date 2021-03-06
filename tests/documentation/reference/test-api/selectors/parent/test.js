import { Selector } from 'testcafe';

fixture`Selector.parent`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check count of the elements parents', async (t) => {
    // Selects all ancestors of all div elements.
    const divParents = Selector('div').parent();

    // Selects all closest parents of all input elements.
    const inputClosestParents = Selector('input').parent(0);

    // Selects all furthest ancestors of all labels.
    const columnFurthestParents = Selector('label').parent(-1);

    // Selects all divs that are ancestors of an 'fieldset' element.
    const fieldsetDivParents = Selector('fieldset').parent('div');

    await t.expect(divParents.count).eql(11);
    await t.expect(inputClosestParents.count).eql(11);
    await t.expect(columnFurthestParents.count).eql(1);
    await t.expect(fieldsetDivParents.count).eql(5);
});
