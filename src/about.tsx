export function About(props: { a: string }) {
    if (props.a === "1") {
        return (
            <>
            <h2>説明!!</h2>
            <p>チャットで会話できます</p>
            <p>現在名前を聞くことぐらいしかできません</p>
            <h3>仕組み</h3>
            <p>形態素解析をし、その単語にあったものを返答してるだけです</p>
            <p>Siriの下位互換です</p>
            </>
        );
    } else {
        return (
            <>
            <h2>Explanation! </h2>
            <p>You can chat with them</p>
            <p>Currently you can only ask for names</p>
            <h3>How it works.</h3>
            <p>It just does a morphological analysis and responds with something that matches the word</p>
            <p>It is backwards compatible with Siri</p>
        </>
        );
    }
}