fixture `TestController`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Submit data', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#populate')
        .click('#submit-button');

    const location = await t.eval(() => window.location);

    await t.expect(location.pathname).eql('/testcafe/example/thank-you.html');
});