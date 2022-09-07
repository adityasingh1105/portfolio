let y = do_allocation(5, 4);
function do_allocation(people, buses) {
    var defualtPeopleCount = 1;
    const newpeoplecount = [];
    const peoplewithbuses = [];
    for (var i = 1; i <= buses; i++) {
        if (people > 1) {
            if (i <= 2) {
                newpeoplecount.push(defualtPeopleCount);
                peoplewithbuses.push(i + " bus added " + defualtPeopleCount + "  people");
            } else {
                const sum = newpeoplecount.reduce((partialSum, a) => partialSum + a, 0);
                var currentpeople = newpeoplecount[i - 3] + newpeoplecount[i - 2];
                var remainingpeople = people - sum;
                if (currentpeople < remainingpeople) {
                    newpeoplecount.push(currentpeople);
                    peoplewithbuses.push(i + " bus added " + currentpeople + "   people");
                } else {
                    if (sum >= people) {
                        currentpeople = 0;
                        newpeoplecount.push(currentpeople);
                        peoplewithbuses.push(i + " bus added " + currentpeople + "   people");
                    } else {
                        newpeoplecount.push(remainingpeople);
                        peoplewithbuses.push(i + " bus added " + remainingpeople + " people");
                    }
                }
            }
        }
		else {
            if (people == i) {
                newpeoplecount.push(defualtPeopleCount);
                peoplewithbuses.push(i + " bus added " + defualtPeopleCount + "  people");
            } else {
                var currentpeople = 0;
                newpeoplecount.push(currentpeople);
                peoplewithbuses.push(i + " bus added " + currentpeople + "   people");
            }
        }
    }
const fruits = peoplewithbuses;
fruits.forEach(myFunction);
}
function myFunction(item, index) {
console.log(item);
}