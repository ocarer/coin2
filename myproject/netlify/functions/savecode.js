exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const data = new URLSearchParams(event.body);
    const code = data.get("code");

    const nameMapping = {
        "usedd": "규원",
        "kdfes": "종하",
        "hskws": "루카스"
    };

    if (nameMapping[code]) {
        return {
            statusCode: 200,
            headers: { "Content-Type": "text/html" },
            body: `<h1>${nameMapping[code]}님 환영합니다!</h1>
                   <p>잠시 후 코인 페이지로 이동합니다...</p>
                   <meta http-equiv="refresh" content="3; url=/coin.html">`
        };
    } else {
        return {
            statusCode: 400,
            headers: { "Content-Type": "text/html" },
            body: `<h1>유효하지 않은 코드입니다.</h1>
                   <p>다시 입력해 주세요.</p>
                   <a href="/login2.html">돌아가기</a>`
        };
    }
};
