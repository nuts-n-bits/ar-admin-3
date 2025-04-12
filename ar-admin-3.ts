// 與外部站點通訊：本插件在運作過程中，會將版本歷史上載至外部數據存取服務：minigun.app。

namespace Types {
        export type LanguageDict = {
                start: string
                found: string
                notfound: string
                foundall: string
                downloadedall: string
                uploading: string
                uploadingrev: string
                upstatus: string
                updone: string
                upload: string
                indexpage: string
                done: string
                confirm: string
                inprogress: string
                done2: string
                begin: string
        }
        export type Revision = {
                r: string
                p: string
                pc: string
                rt: string
                s: string
                un: string
                u: string
                c: string
        }
}

if (1) { 
        const ele = document.getElementById("ar_admin_3"), txt = [..."2025.6"], len = txt.length, time = 400, rate = time/len, cond = document.getElementById("0b0aa2e601903ffb0dded3726d88dcb897be3239d6742ed43598629de08d31a5");
        if(cond && ele) { ele.innerHTML = ""; for(let i=0; i<len; i++) { setTimeout(() => ele.innerHTML += txt.shift(), i*rate); } }; 
}

bluedeck_arv3_nswrap23h89fwe89hfu43wo47uh8fo().ui();

function bluedeck_arv3_nswrap23h89fwe89hfu43wo47uh8fo() {
        const mld: Record<string, Types.LanguageDict> = {
                "zh-cn": {
                        start: `开始查询 [[$1]] 的已删除版本\n`,
                        found: `找到了 $1 个已删除版本，但是还有更多，正在下载\n`,
                        notfound: "无法找回版本。请确认页面名称\n",
                        foundall: `找到了 $1 个已删除版本，已经没有更多\n`,
                        downloadedall: `已经下载了 [[$1]] 页面的全部 $2 个已删除版本\n`,
                        uploading: `正在将共 $1 个已恢复的版本上载至 minigun.app\n`,
                        uploadingrev: `正在上载第 $1 个至第 $2 个版本 ... `,
                        upstatus: "上载状态：",
                        updone: `全部上传完毕，正在清理残余数据\n`,
                        upload: "现在向站外存储上传数据 - ",
                        indexpage: "正在作成目录页面 ...... ",
                        done: "完成！",
                        confirm: "确认开始查询页面：",
                        inprogress: "查询中...",
                        done2: "完成",
                        begin: "自动查询",
                },
                "en-us": {
                        start: `Loading deleted revisions of [[$1]]\n`,
                        found: `Got $1 deleted revisions with more on the way\n`,
                        notfound: "Cannot load deleted revisions. Double check page name\n",
                        foundall: `Got all $1 deleted revisions\n`,
                        downloadedall: `Finished downloading [[$1]]'s revisions totalling $2\n`,
                        uploading: `Uploading $1 recovered revisions to minigun.app\n`,
                        uploadingrev: `Uploading revisions $1 through $2 ... `,
                        upstatus: "Upload status: ",
                        updone: `Uploading finished, cleaning up\n`,
                        upload: "Now uploading to external storage service - ",
                        indexpage: "Creating index page ...... ",
                        done: "All Finished",
                        confirm: "Confirm to start recovery: ",
                        inprogress: "In progress ...",
                        done2: "Done",
                        begin: "Run Query",
                },
                "de-de": {
                        start: "Gelöschte Versionen von [[$1]] werden geladen\n",
                        found: "$1 gelöschte Versionen gefunden, weitere folgen\n",
                        notfound: "Gelöschte Versionen konnten nicht geladen werden. Bitte Seitennamen überprüfen\n",
                        foundall: "Alle $1 gelöschten Versionen wurden gefunden\n",
                        downloadedall: "Download der Versionen von [[$1]] abgeschlossen – insgesamt $2\n",
                        uploading: "$1 wiederhergestellte Versionen werden zu minigun.app hochgeladen\n",
                        uploadingrev: "Versionen $1 bis $2 werden hochgeladen ... ",
                        upstatus: "Upload-Status: ",
                        updone: "Upload abgeschlossen, Bereinigung läuft\n",
                        upload: "Upload zum externen Speicherdienst - ",
                        indexpage: "Indexseite wird erstellt ...... ",
                        done: "Vorgang abgeschlossen",
                        confirm: "Wiederherstellung starten bestätigen: ",
                        inprogress: "Wird ausgeführt ...",
                        done2: "Fertig",
                        begin: "Abfrage starten",
                },
                "fr-fr": {
                        start: "Chargement des révisions supprimées de [[$1]]\n",
                        found: "$1 révisions supprimées trouvées, d'autres sont en cours\n",
                        notfound: "Impossible de charger les révisions supprimées. Vérifiez le nom de la page\n",
                        foundall: "Toutes les $1 révisions supprimées ont été récupérées\n",
                        downloadedall: "Téléchargement terminé des révisions de [[$1]] — total de $2\n",
                        uploading: "Téléversement de $1 révisions récupérées vers minigun.app\n",
                        uploadingrev: "Téléversement des révisions $1 à $2 ... ",
                        upstatus: "Statut du téléversement : ",
                        updone: "Téléversement terminé, nettoyage en cours\n",
                        upload: "Téléversement vers le service de stockage externe - ",
                        indexpage: "Création de la page d’index ...... ",
                        done: "Tout est terminé",
                        confirm: "Confirmer le lancement de la récupération: ",
                        inprogress: "En cours ...",
                        done2: "Terminé",
                        begin: "Lancer la requête",
                },
                "ja-jp": {
                        start: `「[[$1]]」の削除された版を検索しています\n`,
                        found: `$1個の版は見つかりました。さらに取得中\n`,
                        notfound: "版を取得できませんでした。ページ名をご確認ください\n",
                        foundall: "$1 件の削除済みの版が見つかりました。これ以上はありません\n",
                        downloadedall: "ページ「[[$1]]」の削除済みの版 $2 件をすべてダウンロードしました\n",
                        uploading: "復元した $1 件の版を minigun.app にアップロード中です\n",
                        uploadingrev: "$1 件目から $2 件目の版をアップロード中...\n",
                        upstatus: "アップロード状況：",
                        updone: "すべてのアップロードが完了しました。残りのデータをクリーンアップ中です\n",
                        upload: "外部ストレージへのアップロードを開始します - ",
                        indexpage: "インデックスページを作成中です......",
                        done: "完了！",
                        confirm: "ページの検索を開始してもよろしいですか：",
                        inprogress: "検索中...",
                        done2: "完了",
                        begin: "自動検索",
                },
                "ko-kr": {
                        start: "[[$1]]의 삭제된 리비전을 불러오는 중입니다\n",
                        found: "$1개의 삭제된 리비전을 찾았습니다. 추가로 불러오는 중입니다\n",
                        notfound: "삭제된 리비전을 불러올 수 없습니다. 페이지 이름을 다시 확인해 주세요\n",
                        foundall: "$1개의 모든 삭제된 리비전을 찾았습니다. 더 이상 없음\n",
                        downloadedall: "[[$1]]의 삭제된 리비전 $2개 다운로드 완료\n",
                        uploading: "복구된 $1개의 리비전을 minigun.app에 업로드하는 중입니다\n",
                        uploadingrev: "$1번부터 $2번까지의 리비전을 업로드 중...\n",
                        upstatus: "업로드 상태: ",
                        updone: "업로드가 완료되었습니다. 정리 중입니다\n",
                        upload: "외부 저장소 서비스로 업로드 중 - ",
                        indexpage: "인덱스 페이지를 생성하는 중입니다......",
                        done: "모두 완료되었습니다",
                        confirm: "복구를 시작하시겠습니까: ",
                        inprogress: "진행 중...",
                        done2: "완료",
                        begin: "쿼리 실행",
                },
                "zh-tw": {
                        start: "開始查詢「[[$1]]」的已刪除版本\n",
                        found: "找到 $1 個已刪除的版本，仍有更多，正在下載中...\n",
                        notfound: "找不到可還原的版本。請確認頁面名稱是否正確\n",
                        foundall: "已找到 $1 個已刪除的版本，無更多版本可下載\n",
                        downloadedall: "已完成下載「[[$1]]」頁面共 $2 個已刪除的版本\n",
                        uploading: "正在上傳 $1 個已還原的版本至 minigun.app\n",
                        uploadingrev: "正在上傳第 $1 到第 $2 個版本...\n",
                        upstatus: "上傳狀態：",
                        updone: "所有版本皆已上傳完成，正在清理暫存資料\n",
                        upload: "正在將資料上傳至外部儲存空間 - ",
                        indexpage: "正在建立索引頁面......",
                        done: "完成！",
                        confirm: "確認開始查詢頁面：",
                        inprogress: "查詢進行中...",
                        done2: "完成",
                        begin: "自動查詢",
                },
        }
        const ltd: Record<string, string> = {
                "en": "en-us",
                "zh": "zh-cn",
                "ja": "ja-jp",
                "fr": "fr-fr",
                "de": "de-de",
                "ko": "ko-kr",
                "zh-hk": "zh-tw",
                "zh-mo": "zh-tw",
        }
        let lang_variant_chosen: string|undefined = undefined;
        function llinit(): string {
                if (lang_variant_chosen) { return lang_variant_chosen; }
                for (const lang of navigator.languages) {
                        const lang2 = lang.toLowerCase();
                        if (mld[lang2]) { lang_variant_chosen = lang2; break; }
                        if (mld[ltd[lang2]]) { lang_variant_chosen = ltd[lang2]; break; }
                        const lang3 = lang2.split("-")[0];
                        if (mld[ltd[lang3]]) { lang_variant_chosen = ltd[lang3]; break; }
                }
                if (!lang_variant_chosen) { lang_variant_chosen = "en-us"; }
                return lang_variant_chosen;
        }
        function ll(key: keyof Types.LanguageDict, ...params: (string|number)[]) {
                let s = mld[llinit()][key] ?? `~int:${key}`;
                for (let i=0; i<params.length; i++) {
                        s = s.replace(`$${i+1}`, String(params[i]));
                }
                return s;
        }
        function ui() {
                const targets1 = [...(document.querySelectorAll("span.bluedeck_arv3_qs92nas2mcllq10pam1o") as any)];
                const targets2 = [...(document.querySelectorAll("span.bluedeck_arv3_qs92naej10vnslqpxrcfrn5qwj8bsm") as any)];
                const targets = zipmap(targets1, targets2, (a: HTMLElement, b: HTMLElement) => [a, b]);
                for (const [target, logarea] of targets) {
                        target.innerHTML = "";
                        const anchorid = getid();
                        const anchorreplacementid = getid();
                        target.insertAdjacentHTML("afterbegin", `<a id='${anchorid}' href='#preventDefault'>${ll("begin")}</a>`);
                        target.insertAdjacentHTML("afterbegin", `<span id='${anchorreplacementid}'></span>`);
                        const anchor = document.querySelector(`#${anchorid}`);
                        const anchorreplacement: HTMLElement|null = document.querySelector(`#${anchorreplacementid}`);
                        anchor?.addEventListener("click", async e => {
                                e.preventDefault();
                                if (!anchorreplacement) { return; }
                                if (!confirm(ll("confirm") + target.dataset.pgname)) { return; }
                                anchorreplacement.innerText = ll("inprogress");
                                anchor.remove();
                                const loggerid = getid();
                                logarea.insertAdjacentHTML("beforeend", `<div lang="${llinit().substr(0, 2)}" id="${loggerid}" style="white-space:pre-wrap; font-size: 80%; background: rgba(120, 125, 145, 0.1); border-radius: 0.5em; padding: 0.5em 1em;"></div>`)
                                const logger = document.querySelector(`#${loggerid}`);
                                const logemitter = (s: string) => { 
                                        logger?.insertAdjacentHTML("beforeend", `${s}`);
                                }
                                if (!target.dataset.pgname) { return; }
                                await arv3_main(target.dataset.pgname, logemitter);
                                anchorreplacement.innerText += ll("done2");
                        })
                }
        }
        function getid() {
                return Date.now().toString(36) + Math.random().toString(36).slice(2);
        }
        function zipmap<T, U, V>(a: T[], b: U[], f: (t: T, u: U) => V): V[] {
                const len = Math.min(a.length, b.length);
                const coll = [];
                for (let i=0; i<len; i++) {
                        coll.push(f(a[i], b[i]));
                }
                return coll;
        }
        async function arv3_main(pagename: string, logemitter: (s: string) => void) {
                const WIKI_HOST = "https://zh.wikipedia.org";
                const REMOTE_HOST = "https://minigun.app";
                const X_WWW_FORM_URLENCODED = { headers: { "Content-Type": "application/x-www-form-urlencoded" } };
                const POST = { method: "POST" };
                const minigun_link = (case_number: string, revid: string) => esc`https://minigun.app/@bluedeck/zhwp/arview/id/${case_number}/${revid}.txt`;

                // main proc starts
                const revisions = await main_arproc_read(pagename);
                const index_page = await main_arproc_write(pagename, revisions);
                // main proc ends

                function esc(strs: TemplateStringsArray, ...inserts: string[]) {
                        let acc = strs[0];
                        for (let i=1; i<strs.length; i++) {
                                acc += encodeURIComponent(inserts[i-1]);
                                acc += strs[i];
                        }
                        return acc;
                }
                function arrgroup_bytes(arr: string[], number: number): string[][] {
                        const grouped: string[][] = [[]];
                        const byte_length = [0];
                        for (let i=0; i<arr.length; i++) {
                                if (byte_length[byte_length.length-1] >= number) { grouped.push([]); byte_length.push(0); }
                                grouped[grouped.length-1].push(arr[i]);
                                byte_length[byte_length.length-1] += arr[i].length;
                        }
                        return grouped;
                }
                function loggy(s: string) {
                        if (!logemitter) { console.log(s); }
                        else { logemitter(s); }
                }
                async function load_token(): Promise<string> {
                        const token_obj = await (await fetch(WIKI_HOST + `/w/api.php?action=query&meta=tokens&format=json`, { ...POST, ...X_WWW_FORM_URLENCODED })).json();
                        return token_obj.query.tokens.csrftoken;
                }
                function replace_string_escape_wikitext(a: string): string{
                        return a.replaceAll("<", "&lt;").replaceAll("{{", "<nowiki>{{</nowiki>").replaceAll("~~", "~<!---->~").replaceAll("[[", "[[:").replaceAll("[[::", "[[:");
                }
                async function asyncfetchedit(pgname: string, newcontent: string, summary: string, token: string): Promise<void> {
                        const body = esc`action=edit&bot=1&format=json&title=${pgname}&text=${newcontent}&summary=${summary}&token=${token}`;
                        await fetch(WIKI_HOST + `/w/api.php`, { ...POST, ...X_WWW_FORM_URLENCODED, body });
                }
                async function main_arproc_read(pagename: string): Promise<Array<any>> {
                        loggy(ll("start", pagename));
                        let prerevlist = await (await fetch(WIKI_HOST + esc`/w/api.php?action=query&prop=deletedrevisions&format=json&drvprop=content|comment|user|userid|timestamp|size|ids&drvlimit=100&titles=${pagename}`, { ...POST, ...X_WWW_FORM_URLENCODED })).json();
                        let revlist: any[] = [];
                        let counter = 0;
                        while(prerevlist["continue"]) {
                                const temp = (Object.entries(prerevlist.query.pages) as any)[0][1].deletedrevisions.toReversed();
                                loggy(ll("found", counter += temp.length));
                                revlist=temp.concat(revlist);
                                prerevlist = await (await fetch(WIKI_HOST + esc`/w/api.php?action=query&prop=deletedrevisions&format=json&drvprop=content|comment|user|userid|timestamp|size|ids&drvlimit=100&titles=${pagename}&drvcontinue=${prerevlist["continue"].drvcontinue}`, { ...POST, ...X_WWW_FORM_URLENCODED })).json();
                        }
                        let temp;
                        try {
                                temp = (Object.entries(prerevlist.query.pages) as any)[0][1].deletedrevisions.toReversed();
                        } catch (e) {
                                loggy(ll("notfound"));
                                throw e;
                        }
                        loggy(ll("foundall", counter += temp.length));
                        revlist=temp.concat(revlist);
                        loggy(ll("downloadedall", pagename, revlist.length));
                        return revlist;
                }
                async function minigun_fullupload2(revisions: Types.Revision[]) {
                        // -------- BEGIN minigun 2 helpers --------
                        function nq_ch_test(tested: string) { for (const char of tested) { if (!"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*-_=+|;:,./?".includes(char)) { return false; } } return true; }
                        function encode_str(s: string, encode_rn: boolean) { s = s.replaceAll("\\", "\\\\"); if (encode_rn) { s = s.replaceAll("\r", "\\r").replaceAll("\n", "\\n"); } if (!s.includes("`")) { return "`" + s + "`"; } if (!s.includes(`"`)) { return `"${s}"`; } if (!s.includes(`'`)) { return `'${s}'`; } const last = s.length - 1; const threedelim = s[0] !== `"` && s[last] !== `"` ? `"""` : (s[0] !== "'" && s[last] !== "'" ? `'''` : "```"); s = s.replaceAll(threedelim, `${threedelim[0]}${threedelim[0]}\\${threedelim[0]}`); return `${threedelim}${s}${threedelim}`; }
                        function autoencode(str: string, encode_rn: boolean) { return (str.length === 0 ? false : str.length > 100 ? false : nq_ch_test(str)) ? str : encode_str(str, encode_rn); }
                        function escapi(templates: TemplateStringsArray, ...inserts: string[]) { let ret = ""; for (let i = 0; i < inserts.length; i++) { ret += templates[i] + autoencode(String(inserts[i]), true); } return ret + templates[templates.length - 1]; }
                        async function apicalluc(body: string) { const txt = await (await fetch(`${REMOTE_HOST}/@bluedeck/uc`, { "method": "POST", body })).text(); return txt; }
                        // -------- END minigun 2 helpers -------- 
                        const init = await apicalluc(`zhwp arinit`);
                        const sessionid = init.split("--sessionid ")[1].split(" ")[0].replaceAll(/[\`\'\"]/g, "");
                        const case_number = init.split("--case-number ")[1].split(" ")[0];
                        const upload_commands = revisions.map(r => escapi`arupload -r ${r.r} -p ${r.p} -pc ${r.pc} -rt ${r.rt} -s ${r.s} -un ${r.un} -u ${r.u} -c ${r.c}`);
                        const grouped = arrgroup_bytes(upload_commands, 500_000);
                        loggy(ll("uploading", upload_commands.length));
                        let counter = 1;
                        for (const group of grouped) {
                                loggy(ll("uploadingrev", counter, counter+group.length-1));
                                counter += group.length;
                                const ok = await apicalluc(escapi`zhwp arupload --session ${sessionid}` + "\n" + group.join("\n"));
                                loggy(ll("upstatus") + tally_ok(ok.replaceAll("\r", "").split("\n")) + "\n");
                        }
                        loggy(ll("updone"));
                        const close = await apicalluc(escapi`zhwp arclose --session ${sessionid}`);
                        // loggy(close);
                        return { case_number: case_number };
                }
                function tally_ok(ss: string[]): string {
                        let ok = 0, fail = 0;
                        for (const s of ss) { if (s.startsWith("http 200 OK")) { ok += 1; } else { fail += 1; } }
                        if (fail === 0) { return `OK x ${ok}`; }
                        else { return `OK x ${ok}; Fail x ${fail}`; }
                }
                async function main_arproc_write(pagename: string, revisions: Array<any>): Promise<string> {
                        const index_page = "Wikipedia:ArArchive/" + pagename;
                        const conforming_revisions = revisions.map(rev => ({
                                r: rev.revid.toString(), 
                                p: rev.parentid?.toString() ?? "0",
                                pc: pagename,
                                rt: rev.timestamp,
                                s: rev.comment,
                                un: rev.user,
                                u: rev.userid?.toString() ?? "0",
                                c: rev["*"],
                                //  r   -- string --  rev id
                                //  p   -- string --  page id
                                //  pc  -- string --  page canon name (no hant-hans transformation)
                                //  rt  -- string --  rev timestamp
                                //  s   -- string --  edit summary
                                //  un  -- string --  user name
                                //  u   -- string --  user id
                                //  c   -- string --  content
                        }));

                        loggy(ll("upload"));
                        const { case_number } = await minigun_fullupload2(conforming_revisions);

                        loggy(ll("indexpage"));
                        const index_page_content_list = revisions.map(rev => `\n<tr><td> [${minigun_link(case_number, rev.revid)} '''查看存档'''] </td><td> ${rev.timestamp.split('T').join(' ').split('Z').join('')} </td><td> [[user talk:${rev.user}|]] </td><td> ${rev.size} </td><td> ${rev.revid} </td><td> ${replace_string_escape_wikitext(rev.comment)}</td></tr>`)

                        const expiry = new Date(Date.now() + 86400_000 * 30).toISOString().replace("T", " ").replace("Z", "");
                        const final_rev = await asyncfetchedit(
                                index_page, 
                                `页面[[:${pagename}]]共有${revisions.length}个已删除版本，存档如下：\n*查询时间: ~~${"~"}~~\n*由於採用站外工具作為存貯媒介，鏈接有效期僅限查詢之日起30天（至${expiry}）。如果鏈接已經過期，請再提交查詢請求。\n----\n<table style='white-space:nowrap'><tr><td></td><td>'''编辑时分'''</td><td>'''用户'''</td><td>'''页面大小'''</td><td>'''版本号'''</td><td>'''编辑摘要'''</td></tr>${index_page_content_list.toReversed().join("")}\n</table>\n----\n{`+"{subst:User:Bluedeck/infr/ar.thankyou.js}}",
                                "DRV lookup: [[:"+pagename+"]]",
                                await load_token(),
                        );
                        loggy(ll("done"));
                        return index_page;
                }
        }
        return { ui, arv3_main }
}
