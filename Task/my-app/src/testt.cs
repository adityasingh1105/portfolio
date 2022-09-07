using System;
using System.Collections.Generic;
using System.Linq;
public class HelloWorld
{public static void Main(string[] args){
foreach(string var_name in do_allocation(13,5))
{
        Console.WriteLine (var_name);
}
    }
    public static List<string> do_allocation(int people, int buses)
        {

            var defualtPeopleCount = 1;
            List<int> newpeoplecount = new List<int>();
            List<string> peoplewithbuses = new List<string>();
            for (var i = 1; i <= buses; i++)
            {
                if (people > 1)
                {
                    if (i <= 2)
                    {
                        newpeoplecount.Add(defualtPeopleCount);
                        peoplewithbuses.Add(i + " bus added " + defualtPeopleCount + "  people");
                    }
                    else
                    {
                        var currentpeople = newpeoplecount[i - 3] + newpeoplecount[i - 2];
                        var remainingpeople = people - newpeoplecount.Sum(x => x);
                        if (currentpeople < remainingpeople)
                        {
                            newpeoplecount.Add(currentpeople);
                            peoplewithbuses.Add(i + " bus added " + currentpeople + "   people");
                        }
                        else
                        {
                            if (newpeoplecount.Sum(x => x) >= people)
                            {
                                currentpeople = 0;
                                newpeoplecount.Add(currentpeople);
                                peoplewithbuses.Add(i + " bus added " + currentpeople + "   people");
                            }
                            else
                            {
                                newpeoplecount.Add(remainingpeople);
                                peoplewithbuses.Add(i + " bus added " + remainingpeople + " people");
                            }
                        }
                    }
                }
                else
                {
                    if (people == i)
                    {
                        newpeoplecount.Add(defualtPeopleCount);
                        peoplewithbuses.Add(i + " bus added " + defualtPeopleCount + "  people");
                    }
                    else
                    {
                        var currentpeople = 0;
                        newpeoplecount.Add(currentpeople);
                        peoplewithbuses.Add(i + " bus added " + currentpeople + "   people");
                    }
                }
            }
            return peoplewithbuses;
        }
}
